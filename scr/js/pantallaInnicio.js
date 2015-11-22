var puntuacion=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
	// body...
$('button').on('touchend', function(){
window.plugins.deviceFeedback.acoustic()
});
$('#btnSonidos').click(function(){
window.open('sonido.html', 'location=no')
});
puntuacion=localStorage.getItem("puntuacion");

}