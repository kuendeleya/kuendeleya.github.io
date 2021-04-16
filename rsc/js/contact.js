
$('#enviar_email').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var messageLineBreak = message.replace(/\r\n|\r|\n/g, "%0D%0A");
    window.open(
            'mailto:akuendeleya@yahoo.com?subject=CONTACTO PELO WEBSITE&body='
            + messageLineBreak
            + '%0D%0A'
            + name
            + ' '
            + '%0D%0A'
            + email,
            '_blank');
});