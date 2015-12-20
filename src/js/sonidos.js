var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var animalSeleccionado=0;
var nombreAnimal= new Array();
var audioAnimal=new Array();
var audio;
var md1;
var md2;
var android4=false;
var sonido=[0,'abeja.mp3','burro.mp3','caballo.mp3','cabra.mp3','canario.mp3','cerdo.mp3','cuervo.mp3','elefante.mp3','gallo.mp3','gato.mp3','grillo.mp3','leon.mp3','lobo.mp3','mono.mp3','oso.mp3','oveja.mp3','pato.mp3','pavo.mp3','perro.mp3','rana.mp3','vaca.mp3'];
var imagen=[0,'Abeja.png','Burro.png','Caballo.png','Cabra.png','Canario.png','Cerdo.png','Cuervo.png','Elefante.png','Gallo.png','Gato.png','Grillo.png','Leon.png','Lobo.png','Mono.png','Oso.png','Oveja.png','Pato.png','Pavo.png','Perro.png','Rana.png','Vaca.png'];
var nombre=[0,'abeja','burro','caballo','cabra','canario','cerdo','cuervo','elefante','gallo','gato','grillo','leon','lobo','mono','oso','oveja','pato','pavo','perro','rana','vaca'];

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
document.onselectstart = function() {return false;}
window.addEventListener("orientationchange", function() {
window.setTimeout(colocarAltura,250);
}, false);
var expr=/^4/;
var cadena=device.version;
if(expr.test(cadena)){
android4=true;
}
audio=document.createElement('audio');
puntuacion=Number(localStorage.getItem("puntuacion"));
if (puntuacion==null) {
puntuacion=0;
}
var dondeViene=localStorage.getItem('dondeViene');
if(dondeViene=='acierto.html'){
	localStorage.setItem('dondeViene','');
	iniciar();
}else{
$('#pagBienvenida').css('display','block');
reproductor(1,'audio/tituloSonidos.mp3');	
window.setTimeout(iniciar,5000);
}
}

function iniciar(){
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
$('#contPuntuacion').html('<a href="index.html" id="botonAtras"><img src="images/aspa.png"/></a><p>Puntuación='+puntuacion+'</p><p>Nivel='+buscarNivel(puntuacion)+'</p>');
$('#reiniciarEsto').click(function(){
localStorage.setItem("puntuacion","0");
$('#pagFin').css('display','none');
iniciar();
});
$('#contAnimales').css('visibility','hidden');
colocarAnimales();
}

function aleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a))
}

function colocarAnimales(){
animal[1]=aleatorio(1,21);
animal[2]=aleatorio(1,21);
if (animal[1]==animal[2]) {
while(animal[1]==animal[2]){
animal[2]=aleatorio(1,21);
}
}
animal[3]=aleatorio(1,21);
if (animal[3]==animal[1]||animal[3]==animal[2]) {
while(animal[3]==animal[1]||animal[3]==animal[2]){
animal[3]=aleatorio(1,21)
}
}
animal[4]=aleatorio(1,21);
if(animal[4]==animal[1]||animal[4]==animal[2]||animal[4]==animal[3]){
while(animal[4]==animal[1]||animal[4]==animal[2]||animal[4]==animal[3]){
animal[4]=aleatorio(1,21);
}
}
animal[5]=aleatorio(1,21);
if (animal[5]==animal[1]||animal[5]==animal[2]||animal[5]==animal[3]||animal[5]==animal[4]) {
while(animal[5]==animal[1]||animal[5]==animal[2]||animal[5]==animal[3]||animal[5]==animal[4]){
animal[5]=aleatorio(1,21)
}
}
animal[6]=aleatorio(1,21);
if(animal[6]==animal[1]||animal[6]==animal[2]||animal[6]==animal[3]||animal[6]==animal[4]||animal[6]==animal[5]){
while(animal[6]==animal[1]||animal[6]==animal[2]||animal[6]==animal[3]||animal[6]==animal[4]||animal[6]==animal[5]){
animal[6]=aleatorio(1,21);
}
}
animal[7]=aleatorio(1,21);
if(animal[7]==animal[1]||animal[7]==animal[2]||animal[7]==animal[3]||animal[7]==animal[4]||animal[7]==animal[5]||animal[7]==animal[6]){
while(animal[7]==animal[1]||animal[7]==animal[2]||animal[7]==animal[3]||animal[7]==animal[4]||animal[7]==animal[5]||animal[7]==animal[6]){
animal[7]=aleatorio(1,21);
}
}
animal[8]=aleatorio(1,21);
if(animal[8]==animal[1]||animal[8]==animal[2]||animal[8]==animal[3]||animal[8]==animal[4]||animal[8]==animal[5]||animal[8]==animal[6]||animal[8]==animal[7]){
while(animal[8]==animal[1]||animal[8]==animal[2]||animal[8]==animal[3]||animal[8]==animal[4]||animal[8]==animal[5]||animal[8]==animal[6]||animal[8]==animal[7]){
animal[8]=aleatorio(1,21);
}
}
rutaanimal[1]=imagen[animal[1]];
nombreAnimal[1]=nombre[animal[1]];
audioAnimal[1]=sonido[animal[1]];

rutaanimal[2]=imagen[animal[2]];
nombreAnimal[2]=nombre[animal[2]];
audioAnimal[2]=sonido[animal[2]];

rutaanimal[3]=imagen[animal[3]];
nombreAnimal[3]=nombre[animal[3]];
audioAnimal[3]=sonido[animal[3]];

rutaanimal[4]=imagen[animal[4]];
nombreAnimal[4]=nombre[animal[4]];
audioAnimal[4]=sonido[animal[4]];

rutaanimal[5]=imagen[animal[5]];
nombreAnimal[5]=nombre[animal[5]];
audioAnimal[5]=sonido[animal[5]];

rutaanimal[6]=imagen[animal[6]];
nombreAnimal[6]=nombre[animal[6]];
audioAnimal[6]=sonido[animal[6]];

rutaanimal[7]=imagen[animal[7]];
nombreAnimal[7]=nombre[animal[7]];
audioAnimal[7]=sonido[animal[7]];

rutaanimal[8]=imagen[animal[8]];
nombreAnimal[8]=nombre[animal[8]];
audioAnimal[8]=sonido[animal[8]];

window.setTimeout(function(){
if (puntuacion<15) {
animalSeleccionado=aleatorio(1,3);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba3 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal"/></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal" /></div></div>');
window.setTimeout(colocarAltura,50);
}else if (puntuacion<30) {
animalSeleccionado=aleatorio(1,4);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba3 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal" /></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal" /></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div></div>');
window.setTimeout(colocarAltura,50);
}else if (puntuacion<50) {
animalSeleccionado=aleatorio(1,5);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba4 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal"/></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal"/></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal" /></div></div>');
window.setTimeout(colocarAltura,50);
}else if (puntuacion<75) {
animalSeleccionado=aleatorio(1,6);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba4 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal" /></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal" /></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal" /></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal" /></div><div><input type="hidden" value="6"/><img src="images/imagenesAnimales/'+rutaanimal[6]+'" class="btnAnimal" /></div></div>');
window.setTimeout(colocarAltura,50);
}else if (puntuacion<100) {
animalSeleccionado=aleatorio(1,7);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba8 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal"/></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal" /></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal"/></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal" /></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal"/></div><div><input type="hidden" value="6"/><img src="images/imagenesAnimales/'+rutaanimal[6]+'" class="btnAnimal" /></div><div><input type="hidden" value="7"/><img src="images/imagenesAnimales/'+rutaanimal[7]+'" class="btnAnimal"/></div></div>');
window.setTimeout(colocarAltura,50);
}else if (puntuacion<150){
animalSeleccionado=aleatorio(1,8);
if (animal[animalSeleccionado]==1||animal[animalSeleccionado]==4||animal[animalSeleccionado]==16||animal[animalSeleccionado]==20||animal[animalSeleccionado]==21){
    var determinante='la';
}else{
    var determinante='el';
}
$('#contAnimales').html('<div class="encabezado">Donde está '+determinante+' '+nombreAnimal[animalSeleccionado]+'<img src="images/altavoz.png" class="altavoz"/></div><div class="arriba8 item"><div><input type="hidden" value="1"/><img src="images/imagenesAnimales/'+rutaanimal[1]+'" class="btnAnimal"/></div><div><input type="hidden" value="2"/><img src="images/imagenesAnimales/'+rutaanimal[2]+'" class="btnAnimal"/></div><div><input type="hidden" value="3"/><img src="images/imagenesAnimales/'+rutaanimal[3]+'" class="btnAnimal"/></div><div><input type="hidden" value="4"/><img src="images/imagenesAnimales/'+rutaanimal[4]+'" class="btnAnimal"/></div><div><input type="hidden" value="5"/><img src="images/imagenesAnimales/'+rutaanimal[5]+'" class="btnAnimal" /></div><div><input type="hidden" value="6"/><img src="images/imagenesAnimales/'+rutaanimal[6]+'" class="btnAnimal" /></div><div><input type="hidden" value="7"/><img src="images/imagenesAnimales/'+rutaanimal[7]+'" class="btnAnimal"/></div><div><input type="hidden" value="8"/><img src="images/imagenesAnimales/'+rutaanimal[8]+'" class="btnAnimal" /></div></div>');
window.setTimeout(colocarAltura,50);
}else{
    $('#pagPpal').hide();
   $('#pagFin').show(); 
}	

$('.btnAnimal').click(comprobarSeleccion);
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
$('.altavoz').click(function(){
reproductor(2,'audio/'+audioAnimal[animalSeleccionado]);
});
},300);

}

function comprobarSeleccion(){
var animalPulsado=$(this).parent().find('input').val();
if(animalPulsado==animalSeleccionado){
if(android4){
md2.stop();
}
puntuacion=puntuacion+1;
localStorage.setItem('puntuacion',puntuacion);
localStorage.setItem('tipoResultado','acierto');
}else{
if(android4){
md2.stop();
}

localStorage.setItem('tipoResultado','');
}
window.open('acierto.html', '_blank', 'location=yes'); 	
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

function reproductor(n,a){
audio.src=a;
audio.play();
if(android4){
if(n==1){
md1 = new Media('file:///android_asset/www/'+a);
md1.play();	
}
if(n==2){
md2 = new Media('file:///android_asset/www/'+a);
md2.play();	
}
}
}