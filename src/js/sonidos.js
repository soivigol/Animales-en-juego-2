var puntuacion=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
};
$('#contPuntuacion').html('<p>Puntuación='+puntuacio+'</p>');
window.setTimeout(iniciar,200);

}

function iniciar(){
	alert('hola');
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales",[],function(tx,res){
for(var i = 0; i < res.rows.length; i++)
{
$('#pagPpal').append('<p>'+res.rows.item(i).sonido+'-'+res.rows.item(i).imagen+'-'+res.rows.item(i).nombre+'</p>');
}
});
});
}