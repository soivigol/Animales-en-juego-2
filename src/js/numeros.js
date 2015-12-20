var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var audioanimal= new Array();
var animalSeleccionado=0;
var nombreAnimal= new Array();
var sumatorio=0;
var posicionElecta=0;
var numeros= new Array();
var a=0;
var b=0;
var audio;
var media;
var android4=false;
var imagen=[0,'Abeja.png','Burro.png','Caballo.png','Cabra.png','Canario.png','Cerdo.png','Cuervo.png','Elefante.png','Gallo.png','Gato.png','Grillo.png','Leon.png','Lobo.png','Mono.png','Oso.png','Oveja.png','Pato.png','Pavo.png','Perro.png','Rana.png','Vaca.png'];
var nombre=[0,'abeja','burro','caballo','cabra','canario','cerdo','cuervo','elefante','gallo','gato','grillo','leon','lobo','mono','oso','oveja','pato','pavo','perro','rana','vaca'];
var sonido2=[0,'abeja2.mp3','burro2.mp3','caballo2.mp3','cabra2.mp3','canario2.mp3','cerdo2.mp3','cuervo2.mp3','elefante2.mp3','gallo2.mp3','gato2.mp3','grillo2.mp3','leon2.mp3','lobo2.mp3','mono2.mp3','oso2.mp3','oveja2.mp3','pato2.mp3','pavo2.mp3','perro2.mp3','rana2.mp3','vaca2.mp3'];

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
document.onselectstart = function() {return false;}
window.addEventListener("orientationchange", function() {
window.setTimeout(colocarAltura,150);
}, false);
puntuacion=Number(localStorage.getItem("puntuacionNumeros"));
if (puntuacion==null) {
puntuacion=0;
}
audio=document.createElement('audio');
var expr=/^4/;
var cadena=device.version;
if(expr.test(cadena)){
android4=true;
}
var dondeViene=localStorage.getItem('dondeViene');
if(dondeViene=='resultadoNumeros'){
	localStorage.setItem('dondeViene','');
	iniciar();
}else{
$('#pagBienvenida').css('display','block');
reproductor('audio/tituloNumeros.mp3');	
window.setTimeout(iniciar,5000);
}
}

function iniciar(){
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
$('#contPuntuacion').html('<a href="index.html" id="botonAtras"><img src="images/aspa.png"/></a><p>Puntuación='+puntuacion+'</p><p>Nivel='+buscarNivel(puntuacion)+'</p>');
$('#contAnimales').css('visibility','hidden');
colocarAnimales();
}

function colocarAnimales(){
sumatorio=0;
animalSeleccionado=aleatorio(1,21);
animal[0]=animalSeleccionado;
if(animalSeleccionado<19&&animalSeleccionado>1){
a=animalSeleccionado-1; b=animalSeleccionado+2;
}else if(animalSeleccionado>18){
b=animalSeleccionado; a=animalSeleccionado-3;
}else if(animalSeleccionado<2){
a=animalSeleccionado; b=animalSeleccionado+3;
}
animal[1]=aleatorio(a,b);
if(animalSeleccionado==animal[1]){
sumatorio=sumatorio+1;
}
animal[2]=aleatorio(a,b);
if(animalSeleccionado==animal[2]){
sumatorio=sumatorio+1;
}
animal[3]=aleatorio(a,b);
if(animalSeleccionado==animal[3]){
sumatorio=sumatorio+1;
}
animal[4]=aleatorio(a,b);
if(animalSeleccionado==animal[4]){
sumatorio=sumatorio+1;
}
animal[5]=aleatorio(a,b);
if(animalSeleccionado==animal[5]){
sumatorio=sumatorio+1;
}
animal[6]=aleatorio(a,b);
if(animalSeleccionado==animal[6]){
sumatorio=sumatorio+1;
}
rutaanimal[0]=imagen[animalSeleccionado];
nombreAnimal[0]=nombre[animalSeleccionado];
audioanimal[0]=sonido2[animalSeleccionado];

rutaanimal[1]=imagen[animal[1]];
nombreAnimal[1]=nombre[animal[1]];

rutaanimal[2]=imagen[animal[2]];
nombreAnimal[2]=nombre[animal[2]];

rutaanimal[3]=imagen[animal[3]];
nombreAnimal[3]=nombre[animal[3]];

rutaanimal[4]=imagen[animal[4]];
nombreAnimal[4]=nombre[animal[4]];

rutaanimal[5]=imagen[animal[5]];
nombreAnimal[5]=nombre[animal[5]];

rutaanimal[6]=imagen[animal[6]];
nombreAnimal[6]=nombre[animal[6]];
if (animal[0]==1||animal[0]==4||animal[0]==16||animal[0]==20||animal[0]==21){
    var determinante='Cuantas';
}else{
    var determinante='Cuantos';
}

if(animal[0]==12){
	var plurar='es';
}else{
	var plurar='s';
}
if(puntuacion<15){
window.setTimeout(function(){
$('#contAnimales').html('<div class="encabezado">¿'+determinante+' '+nombreAnimal[0]+''+plurar+' hay?<img src="images/altavoz.png" class="altavoz"/></div><div class="numeros6 item"><div><img src="images/imagenesAnimales/'+rutaanimal[1]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[2]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[3]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[4]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[5]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[6]+'"/></div></div>');
window.setTimeout(colocarAltura,20);
posicionElecta=aleatorio(1,3);
numeros[1]=aleatorio(1,6);
numeros[2]=aleatorio(1,6);
numeros[3]=aleatorio(1,6);
numeros[posicionElecta]=sumatorio;
if(numeros[2]==numeros[1]){
while(numeros[2]==numeros[1]){
numeros[2]=aleatorio(1,6);
}
}
if(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
while(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
numeros[3]=aleatorio(1,6);
}
}

$('#contNumeros').html('<button>'+numeros[1]+'</button><button>'+numeros[2]+'</button><button>'+numeros[3]+'</button>');
$('#contNumeros button').click(comprobar);
reproductor('audio/'+audioanimal[0]);
$('.altavoz').click(function(){
reproductor('audio/'+audioanimal[0]);
});
},250);
}else if (puntuacion<30) {
animal[7]=aleatorio(a,b);
if(animalSeleccionado==animal[7]){
sumatorio=sumatorio+1;
}
animal[8]=aleatorio(a,b);
if(animalSeleccionado==animal[8]){
sumatorio=sumatorio+1;
}
animal[9]=aleatorio(a,b);
if(animalSeleccionado==animal[9]){
sumatorio=sumatorio+1;
}

rutaanimal[7]=imagen[animal[7]];
nombreAnimal[7]=nombre[animal[7]];

rutaanimal[8]=imagen[animal[8]];
nombreAnimal[8]=nombre[animal[8]];

rutaanimal[9]=imagen[animal[9]];
nombreAnimal[9]=nombre[animal[9]];

window.setTimeout(function(){
$('#contAnimales').html('<div class="encabezado">¿'+determinante+' '+nombreAnimal[0]+''+plurar+' hay?<img src="images/altavoz.png" class="altavoz"/></div><div class="numeros9 item"><div><img src="images/imagenesAnimales/'+rutaanimal[1]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[2]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[3]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[4]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[5]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[6]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[7]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[8]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[9]+'"/></div></div>');
window.setTimeout(colocarAltura,20);
posicionElecta=aleatorio(1,3);
numeros[1]=aleatorio(1,9);
numeros[2]=aleatorio(1,9);
numeros[3]=aleatorio(1,9);
numeros[posicionElecta]=sumatorio;
if(numeros[2]==numeros[1]){
while(numeros[2]==numeros[1]){
numeros[2]=aleatorio(1,9);
}
}
if(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
while(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
numeros[3]=aleatorio(1,9);
}
}
$('#contNumeros').html('<button>'+numeros[1]+'</button><button>'+numeros[2]+'</button><button>'+numeros[3]+'</button>');
$('#contNumeros button').click(comprobar);
reproductor('audio/'+audioanimal[0]);
$('.altavoz').click(function(){
reproductor('audio/'+audioanimal[0]);
})
},250);
}else if(puntuacion<50){
animal[7]=aleatorio(a,b);
if(animalSeleccionado==animal[7]){
sumatorio=sumatorio+1;
}
animal[8]=aleatorio(a,b);
if(animalSeleccionado==animal[8]){
sumatorio=sumatorio+1;
}
animal[9]=aleatorio(a,b);
if(animalSeleccionado==animal[9]){
sumatorio=sumatorio+1;
}
animal[10]=aleatorio(a,b);
if(animalSeleccionado==animal[10]){
sumatorio=sumatorio+1;
}
animal[11]=aleatorio(a,b);
if(animalSeleccionado==animal[11]){
sumatorio=sumatorio+1;
}
animal[12]=aleatorio(a,b);
if(animalSeleccionado==animal[12]){
sumatorio=sumatorio+1;
}

rutaanimal[7]=imagen[animal[7]];
nombreAnimal[7]=nombre[animal[7]];


rutaanimal[8]=imagen[animal[8]];
nombreAnimal[8]=nombre[animal[8]];

rutaanimal[9]=imagen[animal[9]];
nombreAnimal[9]=nombre[animal[9]];

rutaanimal[10]=imagen[animal[10]];
nombreAnimal[10]=nombre[animal[10]];

rutaanimal[11]=imagen[animal[11]];
nombreAnimal[11]=nombre[animal[11]];

rutaanimal[12]=imagen[animal[12]];
nombreAnimal[12]=nombre[animal[12]];
window.setTimeout(function(){
$('#contAnimales').html('<div class="encabezado">¿'+determinante+' '+nombreAnimal[0]+''+plurar+' hay?<img src="images/altavoz.png" class="altavoz"/></div><div class="numeros9 item"><div><img src="images/imagenesAnimales/'+rutaanimal[1]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[2]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[3]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[4]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[5]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[6]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[7]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[8]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[9]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[10]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[11]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[12]+'"/></div></div>');
window.setTimeout(colocarAltura,20);
posicionElecta=aleatorio(1,3);
numeros[1]=aleatorio(1,12);
numeros[2]=aleatorio(1,12);
numeros[3]=aleatorio(1,12);
numeros[posicionElecta]=sumatorio;
if(numeros[2]==numeros[1]){
while(numeros[2]==numeros[1]){
numeros[2]=aleatorio(1,12);
}
}
if(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
while(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
numeros[3]=aleatorio(1,12);
}
}
$('#contNumeros').html('<button>'+numeros[1]+'</button><button>'+numeros[2]+'</button><button>'+numeros[3]+'</button>');
$('#contNumeros button').click(comprobar);
reproductor('audio/'+audioanimal[0]);
$('.altavoz').click(function(){
reproductor('audio/'+audioanimal[0]);
})
},250);
}else if(puntuacion<75){
colocar16Animales();
window.setTimeout(function(){
$('#contAnimales').html('<div class="encabezado">¿'+determinante+' '+nombreAnimal[0]+''+plurar+' hay?<img src="images/altavoz.png" class="altavoz"/></div><div class="numeros12 item"><div><img src="images/imagenesAnimales/'+rutaanimal[1]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[2]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[3]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[4]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[5]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[6]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[7]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[8]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[9]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[10]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[11]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[12]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[13]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[14]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[15]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[16]+'"/></div></div>');
window.setTimeout(colocarAltura,20);

posicionElecta=aleatorio(1,3);
numeros[1]=aleatorio(1,16);
numeros[2]=aleatorio(1,16);
numeros[3]=aleatorio(1,16);
numeros[posicionElecta]=sumatorio;
if(numeros[2]==numeros[1]){
while(numeros[2]==numeros[1]){
numeros[2]=aleatorio(1,16);
}
}
if(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
while(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
numeros[3]=aleatorio(1,16);
}
}
$('#contNumeros').html('<button>'+numeros[1]+'</button><button>'+numeros[2]+'</button><button>'+numeros[3]+'</button>');
$('#contNumeros button').click(comprobar);
reproductor('audio/'+audioanimal[0]);
$('.altavoz').click(function(){
reproductor('audio/'+audioanimal[0]);	
})
},250);
}else if (puntuacion<100) {
colocar16Animales();
window.setTimeout(function(){
$('#contAnimales').html('<div class="encabezado">¿'+determinante+' '+nombreAnimal[0]+''+plurar+' hay?<img src="images/altavoz.png" class="altavoz"/></div><div class="numeros12 item"><div><img src="images/imagenesAnimales/'+rutaanimal[1]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[2]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[3]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[4]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[5]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[6]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[7]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[8]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[9]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[10]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[11]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[12]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[13]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[14]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[15]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[16]+'"/></div></div>');
window.setTimeout(colocarAltura,50);

posicionElecta=aleatorio(1,4);
numeros[1]=aleatorio(1,16);
numeros[2]=aleatorio(1,16);
numeros[3]=aleatorio(1,16);
numeros[4]=aleatorio(1,16);
numeros[posicionElecta]=sumatorio;
if(numeros[2]==numeros[1]){
while(numeros[2]==numeros[1]){
numeros[2]=aleatorio(1,16);
}
}
if(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
while(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
numeros[3]=aleatorio(1,16);
}
}
if(numeros[4]==numeros[1]||numeros[4]==numeros[2]||numeros[4]==numeros[3]){
while(numeros[4]==numeros[1]||numeros[4]==numeros[2]||numeros[4]==numeros[3]){
numeros[4]=aleatorio(1,16);
}
}
$('#contNumeros').html('<button>'+numeros[1]+'</button><button>'+numeros[2]+'</button><button>'+numeros[3]+'</button><button>'+numeros[4]+'</button>');
$('#contNumeros button').click(comprobar);
reproductor('audio/'+audioanimal[0]);
$('.altavoz').click(function(){
reproductor('audio/'+audioanimal[0]);
})
},250);
}else if(puntuacion<150){
colocar16Animales();
window.setTimeout(function(){
$('#contAnimales').html('<div class="encabezado">¿'+determinante+' '+nombreAnimal[0]+''+plurar+' hay?<img src="images/altavoz.png" class="altavoz"/></div><div class="numeros12 item"><div><img src="images/imagenesAnimales/'+rutaanimal[1]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[2]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[3]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[4]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[5]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[6]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[7]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[8]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[9]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[10]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[11]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[12]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[13]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[14]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[15]+'"/></div><div><img src="images/imagenesAnimales/'+rutaanimal[16]+'"/></div></div>');
window.setTimeout(colocarAltura,50);

posicionElecta=aleatorio(1,5);
numeros[1]=aleatorio(1,16);
numeros[2]=aleatorio(1,16);
numeros[3]=aleatorio(1,16);
numeros[4]=aleatorio(1,16);
numeros[5]=aleatorio(1,16);
numeros[posicionElecta]=sumatorio;
if(numeros[2]==numeros[1]){
while(numeros[2]==numeros[1]){
numeros[2]=aleatorio(1,16);
}
}
if(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
while(numeros[3]==numeros[1]||numeros[3]==numeros[2]){
numeros[3]=aleatorio(1,16);
}
}
if(numeros[4]==numeros[1]||numeros[4]==numeros[2]||numeros[4]==numeros[3]){
while(numeros[4]==numeros[1]||numeros[4]==numeros[2]||numeros[4]==numeros[3]){
numeros[4]=aleatorio(1,16);
}
}
if(numeros[5]==numeros[1]||numeros[5]==numeros[2]||numeros[5]==numeros[3]||numeros[5]==numeros[4]){
while(numeros[5]==numeros[1]||numeros[5]==numeros[2]||numeros[5]==numeros[3]||numeros[5]==numeros[4]){
numeros[5]=aleatorio(1,16);
}
}
$('#contNumeros').html('<button>'+numeros[1]+'</button><button>'+numeros[2]+'</button><button>'+numeros[3]+'</button><button>'+numeros[4]+'</button><button>'+numeros[5]+'</button>');
$('#contNumeros button').click(comprobar);
reproductor('audio/'+audioanimal[0]);
$('.altavoz').click(function(){
reproductor('audio/'+audioanimal[0]);
})
},250);
}else{
	$('#pagPpal').hide();
    $('#pagFin').show(); 
}
}

function aleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a))
}

function comprobar(){
if(Number($(this).text())==sumatorio){
if(android4){
media.stop();
}
puntuacion=puntuacion+1;
localStorage.setItem('puntuacionNumeros',puntuacion);
localStorage.setItem('tipoResultado','acierto');
}else{
if(android4){
media.stop();
}

localStorage.setItem('tipoResultado','');
}
window.open('resultadoNumeros.html', '_blank', 'location=yes'); 	
}

function colocar16Animales(){
animal[7]=aleatorio(a,b);
if(animalSeleccionado==animal[7]){
sumatorio=sumatorio+1;
}
animal[8]=aleatorio(a,b);
if(animalSeleccionado==animal[8]){
sumatorio=sumatorio+1;
}
animal[9]=aleatorio(a,b);
if(animalSeleccionado==animal[9]){
sumatorio=sumatorio+1;
}
animal[10]=aleatorio(a,b);
if(animalSeleccionado==animal[10]){
sumatorio=sumatorio+1;
}
animal[11]=aleatorio(a,b);
if(animalSeleccionado==animal[11]){
sumatorio=sumatorio+1;
}
animal[12]=aleatorio(a,b);
if(animalSeleccionado==animal[12]){
sumatorio=sumatorio+1;
}
animal[13]=aleatorio(a,b);
if(animalSeleccionado==animal[13]){
sumatorio=sumatorio+1;
}
animal[14]=aleatorio(a,b);
if(animalSeleccionado==animal[14]){
sumatorio=sumatorio+1;
}
animal[15]=aleatorio(a,b);
if(animalSeleccionado==animal[15]){
sumatorio=sumatorio+1;
}
animal[16]=aleatorio(a,b);
if(animalSeleccionado==animal[16]){
sumatorio=sumatorio+1;
}
rutaanimal[7]=imagen[animal[7]];
nombreAnimal[7]=nombre[animal[7]];


rutaanimal[8]=imagen[animal[8]];
nombreAnimal[8]=nombre[animal[8]];

rutaanimal[9]=imagen[animal[9]];
nombreAnimal[9]=nombre[animal[9]];

rutaanimal[10]=imagen[animal[10]];
nombreAnimal[10]=nombre[animal[10]];

rutaanimal[11]=imagen[animal[11]];
nombreAnimal[11]=nombre[animal[11]];

rutaanimal[12]=imagen[animal[12]];
nombreAnimal[12]=nombre[animal[12]];
	
rutaanimal[13]=imagen[animal[13]];
nombreAnimal[13]=nombre[animal[13]];

rutaanimal[14]=imagen[animal[14]];
nombreAnimal[14]=nombre[animal[14]];

rutaanimal[15]=imagen[animal[15]];
nombreAnimal[15]=nombre[animal[15]];

rutaanimal[16]=imagen[animal[16]];
nombreAnimal[16]=nombre[animal[16]];
}

function buscarNivel(a){
if (a<15) {
return 1;
}else if (a<30) {
return 2;
}else if (a<50) {
return 3;
}else if (a<75) {
return 4;
}else if (a<100) {
return 5;
}else{
return 6;
}
}

function colocarAltura(){
var largoCont=$('#contAnimales').height();
var largoEncab=$('.encabezado').innerHeight();

$('.item').css('margin-top',(largoCont-largoEncab-($('.item').height()))/2+'px');
$('#contAnimales').css('visibility','visible');
}

function reproductor(a){
audio.src=a;
audio.play();
if(android4){
media=new Media('file:///android_asset/www/'+a);
media.play();
}
}