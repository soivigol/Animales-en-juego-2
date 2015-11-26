var puntuacion=0;
var db;
var animal1=0;
var animal2=0;
var animal3=0;
var rutaAnimal1;
var rutaAnimal2;
var rutaAnimal3;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
};
db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
window.setTimeout(iniciar,2000);

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
$('#contAnimales').html('');
animal1=aleatorio(20);
animal2=aleatorio(20);
animal3=aleatorio(20);
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
});

window.setTimeout(function(){
$('#contAnimales').html('<div class="arriba3"><div>'+rutaAnimal1+'</div><div>'+rutaAnimal2+'</div></div><div class="abajo3">'+rutaAnimal3+'</div>');
},70);

}