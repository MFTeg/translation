// var socket = io.connect();

// // Query DOM
// var message = document.getElementById('message'),
// messageT = document.getElementById('message'),
//       handle = document.getElementById('handle'),
//       btn = document.getElementById('send'),
//       output = document.getElementById('output'),
//       feedback = document.getElementById('feedback');
//       submit = document.getElementById('create-room-btn');

//     var lang = prompt("welcome, what language would you to translate to?")
// // Emit events
// btn.addEventListener('click', function(){
//     socket.emit('chat', {
//         message: message.value,
//         handle: handle.value,
//         messageT: message.value,
//         language: lang
//     });
//     message.value = "";
//     messageT.value = "";
// });

// message.addEventListener('keypress', function(){
//     socket.emit('typing', handle.value);
// })

// // Listen for events
// socket.on('chat', function(data){
//     feedback.innerHTML = '';
//     output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message +'<br>'+  data.messageT + '<br></p>';
// });

// socket.on('typing', function(data){
//     feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
// });

// submit.addEventListener('click', function(){
//     var newRoom = getElementById('newroom').value().trim();
//     var socket = io.connect();
// socket.emit('create', newRoom);
// console.log(newRoom);
// });
