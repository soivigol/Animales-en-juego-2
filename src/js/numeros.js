var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var animalSeleccionado=0;
var nombreAnimal= new Array();
var sumatorio=0;
var posicionElecta=0;
var numeros= new Array();

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=localStorage.getItem("puntuacionNumeros");
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

function colocarAnimales(){
sumatorio=0;
animalSeleccionado=aleatorio(1,21);
if(puntuacion<15){
animal[1]=aleatorio(animalSeleccionado-1,animalSeleccionado+1);
if(animalSeleccionado==animal[1]){
sumatorio=sumatorio+1;
}
animal[2]=aleatorio(animalSeleccionado-1,animalSeleccionado+1);
if(animalSeleccionado==animal[1]){
sumatorio=sumatorio+1;
}
animal[3]=aleatorio(animalSeleccionado-1,animalSeleccionado+1);
if(animalSeleccionado==animal[1]){
sumatorio=sumatorio+1;
}
animal[4]=aleatorio(animalSeleccionado-1,animalSeleccionado+1);
if(animalSeleccionado==animal[1]){
sumatorio=sumatorio+1;
}
animal[5]=aleatorio(animalSeleccionado-1,animalSeleccionado+1);
if(animalSeleccionado==animal[1]){
sumatorio=sumatorio+1;
}
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animalSeleccionado+"'",[],function(tx,res){
rutaanimal[0]=res.rows.item(0).imagen;
nombreAnimal[0]=res.rows.item(0).nombre;
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
});
$('#contAnimales').html('<div class="numeros5"><div>¿Cuantos '+nombreAnimal[0]+' hay?</div><div>'+rutaanimal[1]+'</div><div>'+rutaanimal[2]+'</div><div>'+rutaanimal[3]+'</div><div>'+rutaanimal[4]+'</div><div>'+rutaanimal[5]+'</div></div>');
}
posicionElecta=aleatorio(1,3);
numeros[1]=aleatorio(1,5);
numeros[2]=aleatorio(1,5);
numeros[3]=aleatorio(1,5);
numeros[posicionElecta]=sumatorio;
$('#contNumeros').html('<button>'+numeros[1]+'</button><button>'+numeros[2]+'</button><button>'+numeros[3]+'</button>');
$('#contNumeros button').click(comprobar);
}

function aleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a))
}

function comprobar(){
if(Number($(this).text())==sumatorio){
$('#pagPpal').hide();
$('#pagAcierto').show();
puntuacion=puntuacion+1;
localStorage.setItem('puntuacionNumeros',puntuacion);
window.setTimeout(function(){
$('#pagAcierto').hide();
iniciar();
},800)
}else{
$('#pagPpal').hide();
$('#pagFallo').show();
window.setTimeout(function(){
$('#pagFallo').hide();
iniciar();
},800);
}
}