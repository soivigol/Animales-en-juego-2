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
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animalSeleccionado+"'",[],function(tx,res){
rutaanimal[0]=res.rows.item(0).imagen;
nombreAnimal[0]=res.rows.item(0).nombre;
audioanimal[0]=res.rows.item(0).sonido2;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[1]+"'",[],function(tx,res){
rutaanimal[1]=res.rows.item(0).imagen;
nombreAnimal[1]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[2]+"'",[],function(tx,res){
rutaanimal[2]=res.rows.item(0).imagen;
nombreAnimal[2]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[3]+"'",[],function(tx,res){
rutaanimal[3]=res.rows.item(0).imagen;
nombreAnimal[3]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[4]+"'",[],function(tx,res){
rutaanimal[4]=res.rows.item(0).imagen;
nombreAnimal[4]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[5]+"'",[],function(tx,res){
rutaanimal[5]=res.rows.item(0).imagen;
nombreAnimal[5]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[6]+"'",[],function(tx,res){
rutaanimal[6]=res.rows.item(0).imagen;
nombreAnimal[6]=res.rows.item(0).nombre;
});
});
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
})
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
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[7]+"'",[],function(tx,res){
rutaanimal[7]=res.rows.item(0).imagen;
nombreAnimal[7]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[8]+"'",[],function(tx,res){
rutaanimal[8]=res.rows.item(0).imagen;
nombreAnimal[8]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[9]+"'",[],function(tx,res){
rutaanimal[9]=res.rows.item(0).imagen;
nombreAnimal[9]=res.rows.item(0).nombre;
});
});
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
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[7]+"'",[],function(tx,res){
rutaanimal[7]=res.rows.item(0).imagen;
nombreAnimal[7]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[8]+"'",[],function(tx,res){
rutaanimal[8]=res.rows.item(0).imagen;
nombreAnimal[8]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[9]+"'",[],function(tx,res){
rutaanimal[9]=res.rows.item(0).imagen;
nombreAnimal[9]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[10]+"'",[],function(tx,res){
rutaanimal[10]=res.rows.item(0).imagen;
nombreAnimal[10]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[11]+"'",[],function(tx,res){
rutaanimal[11]=res.rows.item(0).imagen;
nombreAnimal[11]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[12]+"'",[],function(tx,res){
rutaanimal[12]=res.rows.item(0).imagen;
nombreAnimal[12]=res.rows.item(0).nombre;
});
});
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
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[7]+"'",[],function(tx,res){
rutaanimal[7]=res.rows.item(0).imagen;
nombreAnimal[7]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[8]+"'",[],function(tx,res){
rutaanimal[8]=res.rows.item(0).imagen;
nombreAnimal[8]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[9]+"'",[],function(tx,res){
rutaanimal[9]=res.rows.item(0).imagen;
nombreAnimal[9]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[10]+"'",[],function(tx,res){
rutaanimal[10]=res.rows.item(0).imagen;
nombreAnimal[10]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[11]+"'",[],function(tx,res){
rutaanimal[11]=res.rows.item(0).imagen;
nombreAnimal[11]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[12]+"'",[],function(tx,res){
rutaanimal[12]=res.rows.item(0).imagen;
nombreAnimal[12]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[13]+"'",[],function(tx,res){
rutaanimal[13]=res.rows.item(0).imagen;
nombreAnimal[13]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[14]+"'",[],function(tx,res){
rutaanimal[14]=res.rows.item(0).imagen;
nombreAnimal[14]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[15]+"'",[],function(tx,res){
rutaanimal[15]=res.rows.item(0).imagen;
nombreAnimal[15]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[16]+"'",[],function(tx,res){
rutaanimal[16]=res.rows.item(0).imagen;
nombreAnimal[16]=res.rows.item(0).nombre;
});
});
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