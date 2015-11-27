var puntuacion=0;
var animal1=0;
var animal2=0;
var animal3=0;
var animal4=0;
var animal5=0;
var animal6=0;
var animal7=0;
var animal8=0;
var rutaAnimal1;
var rutaAnimal2;
var rutaAnimal3;
var rutaAnimal4;
var rutaAnimal5;
var rutaAnimal6;
var rutaAnimal7;
var rutaAnimal8;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
}
window.setTimeout(iniciar,500);
$('#punt').click(function(){
puntuacion=puntuacion+1;
iniciar();
});
}

function iniciar(){
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
$('#contPuntuacion').html('<p>Puntuación='+puntuacion+'</p>');
colocarAnimales();
}

function aleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a))
}

function colocarAnimales(){
animal1=aleatorio(1,21);
animal2=aleatorio(1,21);
if (animal1==animal2) {
while(animal1==animal2){
animal2=aleatorio(1,21);
}
}
animal3=aleatorio(1,21);
if (animal3==animal1||animal3==animal2) {
while(animal3==animal1||animal3==animal2){
animal3=aleatorio(1,21)
}
}
animal4=aleatorio(1,21);
if(animal4==animal1||animal4==animal2||animal4==animal3){
while(animal4==animal1||animal4==animal2||animal1==animal3){
animal4=aleatorio(1,21);
}
}
animal5=aleatorio(1,21);
if (animal5==animal1||animal5==animal2||animal5==animal3||animal5==animal4) {
while(animal5==animal1||animal5==animal2||animal5==animal3||animal5==animal4){
animal5=aleatorio(1,21)
}
}
animal6=aleatorio(1,21);
if(animal6==animal1||animal6==animal2||animal6==animal3||animal6==animal4||animal6==animal5){
while(animal6==animal1||animal6==animal2||animal6==animal3||animal6==animal4||animal6==animal5){
animal6=aleatorio(1,21);
}
}
animal7=aleatorio(1,21);
if(animal7==animal1||animal7==animal2||animal7==animal3||animal7==animal4||animal7==animal5||animal7==animal6){
while(animal7==animal1||animal7==animal2||animal7==animal3||animal7==animal4||animal7==animal5||animal7==animal6){
animal7=aleatorio(1,21);
}
}
animal8=aleatorio(1,21);
if(animal8==animal1||animal8==animal2||animal8==animal3||animal8==animal4||animal8==animal5||animal8==animal6||animal8==animal7){
while(animal8==animal1||animal8==animal2||animal8==animal3||animal8==animal4||animal8==animal5||animal8==animal6||animal8==animal7){
animal8=aleatorio(1,21);
}
}
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animal1+"'",[],function(tx,res){
rutaAnimal1=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal2+"'",[],function(tx,res){
rutaAnimal2=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal3+"'",[],function(tx,res){
rutaAnimal3=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal4+"'",[],function(tx,res){
rutaAnimal4=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal5+"'",[],function(tx,res){
rutaAnimal5=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal6+"'",[],function(tx,res){
rutaAnimal6=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal7+"'",[],function(tx,res){
rutaAnimal7=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal8+"'",[],function(tx,res){
rutaAnimal8=res.rows.item(0).imagen;
});
});
window.setTimeout(function(){
if (puntuacion<16) {
$('#contAnimales').html('<div class="arriba3"><div>'+rutaAnimal1+'</div><div>'+rutaAnimal2+'</div><div>'+rutaAnimal3+'</div></div>');
}else if (puntuacion<31) {
$('#contAnimales').html('<div class="arriba4"><div>'+rutaAnimal1+'</div><div>'+rutaAnimal2+'</div><div>'+rutaAnimal3+'</div><div>'+rutaAnimal4+'</div></div>');	
}else if (puntuacion<51) {
$('#contAnimales').html('<div class="arriba5"><div>'+rutaAnimal1+'</div><div>'+rutaAnimal2+'</div><div>'+rutaAnimal3+'</div><div>'+rutaAnimal4+'</div><div>'+rutaAnimal5+'</div></div>');
}else if (puntuacion<76) {
$('#contAnimales').html('<div class="arriba6"><div>'+rutaAnimal1+'</div><div>'+rutaAnimal2+'</div><div>'+rutaAnimal3+'</div><div>'+rutaAnimal4+'</div><div>'+rutaAnimal5+'</div><div>'+rutaAnimal6+'</div></div>');
}else if (puntuacion<101) {
$('#contAnimales').html('<div class="arriba7"><div>'+rutaAnimal1+'</div><div>'+rutaAnimal2+'</div><div>'+rutaAnimal3+'</div><div>'+rutaAnimal4+'</div><div>'+rutaAnimal5+'</div><div>'+rutaAnimal6+'</div><div>'+rutaAnimal7+'</div></div>');
}else{
$('#contAnimales').html('<div class="arriba8"><div>'+rutaAnimal1+'</div><div>'+rutaAnimal2+'</div><div>'+rutaAnimal3+'</div><div>'+rutaAnimal4+'</div><div>'+rutaAnimal5+'</div><div>'+rutaAnimal6+'</div><div>'+rutaAnimal7+'</div><div>'+rutaAnimal8+'</div></div>');
}	
},70);




}