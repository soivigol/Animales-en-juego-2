var puntuacion=0;
var db;

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
var animal1=aleatorio(20);
alert(animal1);
$('#contPuntuacion').html('<p>Puntuación='+puntuacio+'</p>');
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales",[],function(tx,res){
for(var i = 0; i < res.rows.length; i++)
{
$('#pagPpal').append('<p>'+res.rows.item(i).sonido+'-'+res.rows.item(i).imagen+'-'+res.rows.item(i).nombre+'</p>');
}
});
});
}

function aleatorio(a){
return Math.round(Math.random()*a);
}