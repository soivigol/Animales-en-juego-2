var puntuacion=0;
var animal1=0;
var animal2=0;
var animal3=0;
var rutaAnimal1;
var rutaAnimal2;
var rutaAnimal3;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
	alert('hola')
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
}

}

function iniciar(){
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
$('#contPuntuacion').html('<p>Puntuación='+puntuacion+'</p>');
colocarAnimales():
}

function aleatorio(a){
return Math.round(Math.random()*a);
}

function colocarAnimales(){
alert('hola')
animal1=aleatorio(20);
animal2=aleatorio(20);
animal3=aleatorio(20);


}