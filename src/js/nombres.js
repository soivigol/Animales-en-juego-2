var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var animalSeleccionado=0;
var nombreAnimal= new Array();
var audio;
var android4=false;
var imagen=[0,'Abeja.png','Burro.png','Caballo.png','Cabra.png','Canario.png','Cerdo.png','Cuervo.png','Elefante.png','Gallo.png','Gato.png','Grillo.png','Leon.png','Lobo.png','Mono.png','Oso.png','Oveja.png','Pato.png','Pavo.png','Perro.png','Rana.png','Vaca.png'];
var nombre=[0,'abeja','burro','caballo','cabra','canario','cerdo','cuervo','elefante','gallo','gato','grillo','leon','lobo','mono','oso','oveja','pato','pavo','perro','rana','vaca'];

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
document.onselectstart = function() {return false;}
window.addEventListener("orientationchange", function() {
window.setTimeout(colocarAltura,150);
}, false);
puntuacion=Number(localStorage.getItem("puntuacionNombres"));
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
if(dondeViene=='resultadoNombres'){
	localStorage.setItem('dondeViene','');
	iniciar();
}else{
$('#pagBienvenida').css('display','block');
reproductor('audio/tituloNombres.mp3');
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

function reproductor(a){
audio.src=a;
audio.play();
if(android4){
media=new Media('file:///android_asset/www/'+a);
media.play();
}
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
if(puntuacion>14){
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
}

if(puntuacion>29){
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
}
    
if(puntuacion>49){
animal[9]=aleatorio(1,21);
if(animal[9]==animal[1]||animal[9]==animal[2]||animal[9]==animal[3]||animal[9]==animal[4]||animal[9]==animal[5]||animal[9]==animal[6]||animal[9]==animal[7]||animal[9]==animal[8]){
while(animal[9]==animal[1]||animal[9]==animal[2]||animal[9]==animal[3]||animal[9]==animal[4]||animal[9]==animal[5]||animal[9]==animal[6]||animal[9]==animal[7]||animal[9]==animal[8]){
animal[9]=aleatorio(1,21);
}
}
animal[10]=aleatorio(1,21);
if(animal[10]==animal[1]||animal[10]==animal[2]||animal[10]==animal[3]||animal[10]==animal[4]||animal[10]==animal[5]||animal[10]==animal[6]||animal[10]==animal[7]||animal[10]==animal[8]||animal[10]==animal[9]){
while(animal[10]==animal[1]||animal[10]==animal[2]||animal[10]==animal[3]||animal[10]==animal[4]||animal[10]==animal[5]||animal[10]==animal[6]||animal[10]==animal[7]||animal[10]==animal[8]||animal[10]==animal[9]){
animal[10]=aleatorio(1,21);
}
}
}
    
if(puntuacion>74){
animal[11]=aleatorio(1,21);
if(animal[11]==animal[1]||animal[11]==animal[2]||animal[11]==animal[3]||animal[11]==animal[4]||animal[11]==animal[5]||animal[11]==animal[6]||animal[11]==animal[7]||animal[11]==animal[8]||animal[11]==animal[9]||animal[11]==animal[10]){
while(animal[11]==animal[1]||animal[11]==animal[2]||animal[11]==animal[3]||animal[11]==animal[4]||animal[11]==animal[5]||animal[11]==animal[6]||animal[11]==animal[7]||animal[11]==animal[8]||animal[11]==animal[9]||animal[11]==animal[10]){
animal[11]=aleatorio(1,21);
}
}
animal[12]=aleatorio(1,21);
if(animal[12]==animal[1]||animal[12]==animal[2]||animal[12]==animal[3]||animal[12]==animal[4]||animal[12]==animal[5]||animal[12]==animal[6]||animal[12]==animal[7]||animal[12]==animal[8]||animal[12]==animal[9]||animal[12]==animal[10]||animal[12]==animal[11]){
while(animal[12]==animal[1]||animal[12]==animal[2]||animal[12]==animal[3]||animal[12]==animal[4]||animal[12]==animal[5]||animal[12]==animal[6]||animal[12]==animal[7]||animal[12]==animal[8]||animal[12]==animal[9]||animal[12]==animal[10]||animal[12]==animal[11]){
animal[12]=aleatorio(1,21);
}
}
animal[13]=aleatorio(1,21);
if(animal[13]==animal[1]||animal[13]==animal[2]||animal[13]==animal[3]||animal[13]==animal[4]||animal[13]==animal[5]||animal[13]==animal[6]||animal[13]==animal[7]||animal[13]==animal[8]||animal[13]==animal[9]||animal[13]==animal[10]||animal[13]==animal[11]||animal[13]==animal[12]){
while(animal[13]==animal[1]||animal[13]==animal[2]||animal[13]==animal[3]||animal[13]==animal[4]||animal[13]==animal[5]||animal[13]==animal[6]||animal[13]==animal[7]||animal[13]==animal[8]||animal[13]==animal[9]||animal[13]==animal[10]||animal[13]==animal[11]||animal[13]==animal[12]){
animal[13]=aleatorio(1,21);
}
}
}
    
if(puntuacion>99){
animal[14]=aleatorio(1,21);
if(animal[14]==animal[1]||animal[14]==animal[2]||animal[14]==animal[3]||animal[14]==animal[4]||animal[14]==animal[5]||animal[14]==animal[6]||animal[14]==animal[7]||animal[14]==animal[8]||animal[14]==animal[9]||animal[14]==animal[10]||animal[14]==animal[11]||animal[14]==animal[12]||animal[14]==animal[13]){
while(animal[14]==animal[1]||animal[14]==animal[2]||animal[14]==animal[3]||animal[14]==animal[4]||animal[14]==animal[5]||animal[14]==animal[6]||animal[14]==animal[7]||animal[14]==animal[8]||animal[14]==animal[9]||animal[14]==animal[10]||animal[14]==animal[11]||animal[14]==animal[12]||animal[14]==animal[13]){
animal[14]=aleatorio(1,21);
}
}
animal[15]=aleatorio(1,21);
if(animal[15]==animal[1]||animal[15]==animal[2]||animal[15]==animal[3]||animal[15]==animal[4]||animal[15]==animal[5]||animal[15]==animal[6]||animal[15]==animal[7]||animal[15]==animal[8]||animal[15]==animal[9]||animal[15]==animal[10]||animal[15]==animal[11]||animal[15]==animal[12]||animal[15]==animal[13]||animal[15]==animal[14]){
while(animal[15]==animal[1]||animal[15]==animal[2]||animal[15]==animal[3]||animal[15]==animal[4]||animal[15]==animal[5]||animal[15]==animal[6]||animal[15]==animal[7]||animal[15]==animal[8]||animal[15]==animal[9]||animal[15]==animal[10]||animal[15]==animal[11]||animal[15]==animal[12]||animal[15]==animal[13]||animal[15]==animal[14]){
animal[15]=aleatorio(1,21);
}
}
animal[16]=aleatorio(1,21);
if(animal[16]==animal[1]||animal[16]==animal[2]||animal[16]==animal[3]||animal[16]==animal[4]||animal[16]==animal[5]||animal[16]==animal[6]||animal[16]==animal[7]||animal[16]==animal[8]||animal[16]==animal[9]||animal[16]==animal[10]||animal[16]==animal[11]||animal[16]==animal[12]||animal[16]==animal[13]||animal[16]==animal[14]||animal[16]==animal[15]){
while(animal[16]==animal[1]||animal[16]==animal[2]||animal[16]==animal[3]||animal[16]==animal[4]||animal[16]==animal[5]||animal[16]==animal[6]||animal[16]==animal[7]||animal[16]==animal[8]||animal[16]==animal[9]||animal[16]==animal[10]||animal[16]==animal[11]||animal[16]==animal[12]||animal[16]==animal[13]||animal[16]==animal[14]||animal[16]==animal[15]){
animal[16]=aleatorio(1,21);
}
}    
}

rutaanimal[1]=imagen[animal[1]];
nombreAnimal[1]=nombre[animal[1]];
	
rutaanimal[2]=imagen[animal[2]];
nombreAnimal[2]=nombre[animal[2]];

rutaanimal[3]=imagen[animal[3]];
nombreAnimal[3]=nombre[animal[3]];
	
rutaanimal[4]=imagen[animal[4]];
nombreAnimal[4]=nombre[animal[4]];

if(puntuacion>14){
rutaanimal[5]=imagen[animal[5]];
nombreAnimal[5]=nombre[animal[5]];

rutaanimal[6]=imagen[animal[6]];
nombreAnimal[6]=nombre[animal[6]];

}
if (puntuacion>29){
rutaanimal[7]=imagen[animal[7]];
nombreAnimal[7]=nombre[animal[7]];

rutaanimal[8]=imagen[animal[8]];
nombreAnimal[8]=nombre[animal[8]];
}

if(puntuacion>49){
rutaanimal[9]=imagen[animal[9]];
nombreAnimal[9]=nombre[animal[9]];

rutaanimal[10]=imagen[animal[10]];
nombreAnimal[10]=nombre[animal[10]];
}
    
if(puntuacion>74){
rutaanimal[11]=imagen[animal[11]];
nombreAnimal[11]=nombre[animal[11]];
	
rutaanimal[12]=imagen[animal[12]];
nombreAnimal[12]=nombre[animal[12]];

rutaanimal[13]=imagen[animal[13]];
nombreAnimal[13]=nombre[animal[13]];
}
    
if(puntuacion>99){
rutaanimal[14]=imagen[animal[14]];
nombreAnimal[14]=nombre[animal[14]];

rutaanimal[15]=imagen[animal[15]];
nombreAnimal[15]=nombre[animal[15]];

rutaanimal[16]=imagen[animal[16]];
nombreAnimal[16]=nombre[animal[16]];
}

window.setTimeout(function(){
if (puntuacion<15) {
animalSeleccionado=aleatorio(1,4);
$('#contAnimales').html('<div class="encabezado">¿Como se llama este animal?<img src="images/imagenesAnimales/'+rutaanimal[animalSeleccionado]+'"/></div><div class="nombre4 item"><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div></div>');
window.setTimeout(colocarAltura,20);
}else if (puntuacion<30) {
animalSeleccionado=aleatorio(1,6);
$('#contAnimales').html('<div class="encabezado">¿Como se llama este animal?<img src="images/imagenesAnimales/'+rutaanimal[animalSeleccionado]+'"/></div><div class="nombre4 item"><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div></div>');	
window.setTimeout(colocarAltura,20);
}else if (puntuacion<50) {
animalSeleccionado=aleatorio(1,8);
$('#contAnimales').html('<div class="encabezado">¿Como se llama este animal?<img src="images/imagenesAnimales/'+rutaanimal[animalSeleccionado]+'"/></div><div class="nombre4 item"><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div></div>');
window.setTimeout(colocarAltura,20);
}else if (puntuacion<75) {
animalSeleccionado=aleatorio(1,10);
$('#contAnimales').html('<div class="encabezado">¿Como se llama este animal?<img src="images/imagenesAnimales/'+rutaanimal[animalSeleccionado]+'"/></div><div class="nombre5 item"><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div><div class="btnAnimal" ><input type="hidden" value="9"/>'+nombreAnimal[9]+'</div><div class="btnAnimal" ><input type="hidden" value="10"/>'+nombreAnimal[10]+'</div></div>');	
window.setTimeout(colocarAltura,20);
}else if (puntuacion<100) {
animalSeleccionado=aleatorio(1,13);
$('#contAnimales').html('<div class="encabezado">¿Como se llama este animal?<img src="images/imagenesAnimales/'+rutaanimal[animalSeleccionado]+'"/></div><div class="nombre5 item"><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div><div class="btnAnimal" ><input type="hidden" value="9"/>'+nombreAnimal[9]+'</div><div class="btnAnimal" ><input type="hidden" value="10"/>'+nombreAnimal[10]+'</div><div class="btnAnimal" ><input type="hidden" value="11"/>'+nombreAnimal[11]+'</div><div class="btnAnimal" ><input type="hidden" value="12"/>'+nombreAnimal[12]+'</div><div class="btnAnimal" ><input type="hidden" value="13"/>'+nombreAnimal[13]+'</div></div>');	
window.setTimeout(colocarAltura,20);
}else{
animalSeleccionado=aleatorio(1,16);
$('#contAnimales').html('<div class="encabezado">¿Como se llama este animal?<img src="images/imagenesAnimales/'+rutaanimal[animalSeleccionado]+'"/></div><div class="nombre5 item"><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div><div class="btnAnimal" ><input type="hidden" value="9"/>'+nombreAnimal[9]+'</div><div class="btnAnimal" ><input type="hidden" value="10"/>'+nombreAnimal[10]+'</div><div class="btnAnimal" ><input type="hidden" value="11"/>'+nombreAnimal[11]+'</div><div class="btnAnimal" ><input type="hidden" value="12"/>'+nombreAnimal[12]+'</div><div class="btnAnimal" ><input type="hidden" value="13"/>'+nombreAnimal[13]+'</div><div class="btnAnimal" ><input type="hidden" value="14"/>'+nombreAnimal[14]+'</div><div class="btnAnimal" ><input type="hidden" value="15"/>'+nombreAnimal[15]+'</div><div class="btnAnimal" ><input type="hidden" value="16"/>'+nombreAnimal[16]+'</div></div>');
	
window.setTimeout(colocarAltura,20);
}

$('.btnAnimal').click(comprobarSeleccion);

},200);

}

function comprobarSeleccion(){
var animalPulsado=$(this).find('input').val();
if(animalPulsado==animalSeleccionado){
puntuacion=puntuacion+1;
localStorage.setItem('puntuacionNombres',puntuacion);
localStorage.setItem('tipoResultado','acierto');
}else{

localStorage.setItem('tipoResultado','');
}
window.open('resultadoNombres.html', '_blank', 'location=yes'); 
}

function aleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a))
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