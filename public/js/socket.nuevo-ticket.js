var socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual)
});

$('button').on('click', function() {
    console.log('click');

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket)
    });
});