$(document).ready(function () {
    $('#send-btn').click(function () {
        if ($('#chat-msg') != '') {
            socket.emit('send-Amsg', $('#chat-msg').val());
        }
    })
})

socket.on('chat-Adata', function (data) {
    $('#msg').append('<div class="bg-light text-dark">' + data + '</div>');
})

socket.on('chat-Idata', function (data) {
    $('#msg').append('<div class="bg-dark text-white">' + data + '</div>');
})