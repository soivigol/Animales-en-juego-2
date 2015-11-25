var puntuacion=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM animales",[],function(tx,res){
for(var i = 0; i < res.rows.length; i++)
{
$('body').append('<p>'+res.rows.item(i).sonido+'-'+res.rows.item(i).imagen+'-'+res.rows.item(i).nombre+'</p>');
}
});
});
}