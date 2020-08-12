$(document).ready(function () {
    if ($('#chat-msg') != '') {

        $('#send-btn').click(function () {
            socket.emit('send-Amsg', $('#chat-msg').val());
        })

    }
})

socket.on('chat-Adata', function (data) {
    $('#msg').append('<div class="bg-light text-dark">' + data + '</div>');
})

socket.on('chat-Idata', function (data) {
    $('#msg').append('<div class="bg-dark text-white">' + data + '</div>');
})