/*
 * @Author: Dicky Ermawan S., S.T., MTA 
 * @Email: wanasaja@gmail.com 
 * @Web: dickyermawan.github.io 
 * @Linkedin: linkedin.com/in/dickyermawan 
 * @Date: 2019-08-18 17:56:21 
 * @Last Modified by: Dicky Ermawan S., S.T., MTA
 * @Last Modified time: 2019-08-19 23:22:07
 */

let cekPesan = false

let intv = () => setInterval(function() {
    $('#jam').html(moment().format('LL, H:mm:ss'))
}, 1000)

let setCekPesan = () => {
    cekPesan = (cekPesan) ? false : true
}

let kirimWa = (no, pesan) => {
    if(no[0] !== '62')
        no = no.replace(/^.{1}/g, '62')
    pesan = encodeURI(pesan)
    let link = 'https://api.whatsapp.com/send?phone='+ no +'&text=' + pesan
    window.location.href = link
}

$('document').ready(function(){
    
    moment.locale('id')
    intv()

    // no.wa sedang di ketik -> event input
    $('#nomor').on('input', function(){
        no = $('#nomor').val()
        if(no==='') 
            $('#nomor-err').show('slow') 
        else
            $('#nomor-err').hide('slow') 
    })
    
    // checkBox Pesan -> click
    $('#cek-pesan').click(function(){
        setCekPesan()
        $('#pesan').slideToggle('slow')
    })
    
    // Tombol Kirim -> click
    $('#btn-submit').click(function(){
        let no = $('#nomor').val()
        let pesan = ''

        if(no==='')
            $('#nomor-err').show('slow')
        else{
            if(cekPesan)
                pesan = $('#pesan-isi').val()
            kirimWa(no, pesan)
        }                
    })

})