var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var animalSeleccionado=0;
var nombreAnimal= new Array();

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
}
window.setTimeout(iniciar,500);
}

function iniciar(){
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
$('#contPuntuacion').html('<p>Puntuación='+puntuacion+'</p>');
colocarAnimales();
}