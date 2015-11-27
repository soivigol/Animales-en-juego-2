var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var animalSeleccionado=0;

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
while(animal[4]==animal[1]||animal[4]==animal[2]||animal[1]==animal[3]){
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
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[1]+"'",[],function(tx,res){
rutaanimal[1]=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[2]+"'",[],function(tx,res){
rutaanimal[2]=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[3]+"'",[],function(tx,res){
rutaanimal[3]=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[4]+"'",[],function(tx,res){
rutaanimal[4]=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[5]+"'",[],function(tx,res){
rutaanimal[5]=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[6]+"'",[],function(tx,res){
rutaanimal[6]=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[7]+"'",[],function(tx,res){
rutaanimal[7]=res.rows.item(0).imagen;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[8]+"'",[],function(tx,res){
rutaanimal[8]=res.rows.item(0).imagen;
});
});
window.setTimeout(function(){
if (puntuacion<15) {
animalSeleccionado=aleatorio(1,3);
$('#contAnimales').html('<div class="arriba3"><div>'+rutaanimal[1]+'</div><div>'+rutaanimal[2]+'</div><div>Donde está el '+rutaanimal[animalSeleccionado]+'</div><div>'+rutaanimal[3]+'</div></div>');
}else if (puntuacion<30) {
animalSeleccionado=aleatorio(1,4);
$('#contAnimales').html('<div class="arriba4"><div>'+rutaanimal[1]+'</div><div>'+rutaanimal[2]+'</div><div>Donde está el '+rutaanimal[animalSeleccionado]+'</div><div>'+rutaanimal[3]+'</div><div>'+rutaanimal[4]+'</div></div>');	
}else if (puntuacion<50) {
animalSeleccionado=aleatorio(1,5);
$('#contAnimales').html('<div class="arriba5"><div>'+rutaanimal[1]+'</div><div>'+rutaanimal[2]+'</div><div>'+rutaanimal[3]+'</div><div>Donde está el '+rutaanimal[animalSeleccionado]+'</div><div>'+rutaanimal[4]+'</div><div>'+rutaanimal[5]+'</div></div>');
}else if (puntuacion<75) {
animalSeleccionado=aleatorio(1,6);
$('#contAnimales').html('<div class="arriba6"><div>'+rutaanimal[1]+'</div><div>'+rutaanimal[2]+'</div><div>'+rutaanimal[3]+'</div><div>'+rutaanimal[4]+'</div><div>Donde está el '+rutaanimal[animalSeleccionado]+'</div><div>'+rutaanimal[5]+'</div><div>'+rutaanimal[6]+'</div></div>');
}else if (puntuacion<100) {
animalSeleccionado=aleatorio(1,7);
$('#contAnimales').html('<div class="arriba7"><div>'+rutaanimal[1]+'</div><div>'+rutaanimal[2]+'</div><div>'+rutaanimal[3]+'</div><div>'+rutaanimal[4]+'</div><div>Donde está el '+rutaanimal[animalSeleccionado]+'</div><div>'+rutaanimal[5]+'</div><div>'+rutaanimal[6]+'</div><div>'+rutaanimal[7]+'</div></div>');
}else{
animalSeleccionado=aleatorio(1,8);
$('#contAnimales').html('<div class="arriba8"><div>'+rutaanimal[1]+'</div><div>'+rutaanimal[2]+'</div><div>'+rutaanimal[3]+'</div><div>'+rutaanimal[4]+'</div><div>Donde está el '+rutaanimal[animalSeleccionado]+'</div><div>'+rutaanimal[5]+'</div><div>'+rutaanimal[6]+'</div><div>'+rutaanimal[7]+'</div><div>'+rutaanimal[8]+'</div></div>');
}	
},70);




}