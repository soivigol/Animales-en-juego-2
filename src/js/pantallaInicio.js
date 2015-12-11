var puntuacion=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
document.onselectstart = function() {return false;}
$('a').on('touchend', function(){
window.plugins.deviceFeedback.acoustic();
});
puntuacion=localStorage.getItem("puntuacion");
if (puntuacion==null) {
puntuacion=0;
};
var primeraVez=localStorage.getItem("primeraVez");
if (primeraVez!=11) {
var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
tx.executeSql('CREATE TABLE IF NOT EXISTS animales(id integer primary key, sonido text, imagen text, nombre text)');
var sonido=['abeja.mp3','burro.mp3','caballo.mp3','cabra.mp3','canario.mp3','cerdo.mp3','cuervo.mp3','elefante.mp3','gallo.mp3','gato.mp3','grillo.mp3','leon.mp3','lobo.mp3','mono.mp3','oso.mp3','oveja.mp3','pato.mp3','pavo.mp3','perro.mp3','rana.mp3','vaca.mp3'];
var imagen=['Abeja.png','Burro.png','Caballo.png','Cabra.png','Canario.png','Cerdo.png','Cuervo.png','Elefante.png','Gallo.png','Gato.png','Grillo.png','Leon.png','Lobo.png','Mono.png','Oso.png','Oveja.png','Pato.png','Pavo.png','Perro.png','Rana.png','Vaca.png'];
var nombre=['abeja','burro','caballo','cabra','canario','cerdo','cuervo','elefante','gallo','gato','grillo','leon','lobo','mono','oso','oveja','pato','pavo','perro','rana','vaca'];
for (var i = 0; i < 21; i++) {
tx.executeSql("INSERT INTO animales(sonido,imagen,nombre) VALUES (?,?,?)", [sonido[i],imagen[i],nombre[i]]);
}
localStorage.setItem('primeraVez','11');
});
}
$('#contPuntuacion').html('Puntuación='+puntuacion);
$('#btnSalir').click(function(e){
e.preventDefault();
navigator.app.exitApp();
});
}
