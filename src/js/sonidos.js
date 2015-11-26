var puntuacion=0;
var db;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
};
$('#contPuntuacion').html('<p>Puntuación='+puntuacio+'</p>');
window.setTimeout(function(){
iniciar();
},2000);
db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});

}

function iniciar(){
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales",[],function(tx,res){
for(var i = 0; i < res.rows.length; i++)
{
$('#pagPpal').append('<p>'+res.rows.item(i).sonido+'-'+res.rows.item(i).imagen+'-'+res.rows.item(i).nombre+'</p>');
}
});
});
}