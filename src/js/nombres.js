var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var animalSeleccionado=0;
var nombreAnimal= new Array();

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=Number(localStorage.getItem("puntuacionNombres"));
if (puntuacion==null) {
puntuacion=0;
}
window.setTimeout(iniciar,500);
}

function iniciar(){
$('#pagBienvenida').css('display','none');
$('#pagPpal').css('display','block');
$('#contPuntuacion').html('<p>Puntuación='+puntuacion+'</p><p>Nivel='+buscarNivel(puntuacion)+'</p>');
colocarAnimales();
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
if(puntuacion>14){
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
}

var db = window.sqlitePlugin.openDatabase({name: "animales.db", androidLockWorkaround: 1});
db.transaction(function(tx) {
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
if(puntuacion>14){
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[5]+"'",[],function(tx,res){
rutaanimal[5]=res.rows.item(0).imagen;
nombreAnimal[5]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[6]+"'",[],function(tx,res){
rutaanimal[6]=res.rows.item(0).imagen;
nombreAnimal[6]=res.rows.item(0).nombre;
});
}

});

window.setTimeout(function(){
if (puntuacion<15) {
animalSeleccionado=aleatorio(1,4);
$('#contAnimales').html('<div class="nombre4"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div></div>');
}else if (puntuacion<30) {
animalSeleccionado=aleatorio(1,6);
$('#contAnimales').html('<div class="nombre6"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div></div>');	
}

$('.btnAnimal').click(comprobarSeleccion);

},120);

}

function comprobarSeleccion(){
var animalPulsado=$(this).find('input').val();
if(animalPulsado==animalSeleccionado){
$('#pagPpal').hide();
$('#pagAcierto').show();
puntuacion=puntuacion+1;
localStorage.setItem('puntuacionNombres',puntuacion);

window.setTimeout(function(){
$('#pagAcierto').hide();
iniciar();
},800);

}else{
$('#pagPpal').hide();
$('#pagFallo').show();
window.setTimeout(function(){
$('#pagFallo').hide();
iniciar();
},800);
}
}

function aleatorio(a,b){
return Math.round(Math.random()*(b-a)+parseInt(a))
}

function buscarNivel(a){
if (a<16) {
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