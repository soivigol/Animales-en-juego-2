var puntuacion=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
document.onselectstart = function() {return false;}
$('a').on('touchend', function(){
window.plugins.deviceFeedback.acoustic();
});
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
};

$('#contPuntuacion').html('Puntuación='+puntuacion);
$('#btnSalir').click(function(e){
e.preventDefault();
navigator.app.exitApp();
});
}
