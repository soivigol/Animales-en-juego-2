var puntuacion=0;
var animal=new Array();
var rutaanimal= new Array();
var animalSeleccionado=0;
var nombreAnimal= new Array();

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady () {
puntuacion=Number(localStorage.getItem("puntuacion"));
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
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[6]+"'",[],function(tx,res){
rutaanimal[6]=res.rows.item(0).imagen;
nombreAnimal[6]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[7]+"'",[],function(tx,res){
rutaanimal[7]=res.rows.item(0).imagen;
nombreAnimal[7]=res.rows.item(0).nombre;
});
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[8]+"'",[],function(tx,res){
rutaanimal[8]=res.rows.item(0).imagen;
nombreAnimal[8]=res.rows.item(0).nombre;
});
});
window.setTimeout(function(){
if (puntuacion<15) {
animalSeleccionado=aleatorio(1,3);
$('#contAnimales').html('<div class="arriba3"><div>Donde está el '+nombreAnimal[animalSeleccionado]+'</div><div><input type="hidden" value="1"/><img src="'+rutaanimal[1]+'" class="btnAnimal" alt="'+nombreAnimal[1]+'"/></div><div><input type="hidden" value="2"/><img src="'+rutaanimal[2]+'" class="btnAnimal" alt="'+nombreAnimal[2]+'"/></div><div><input type="hidden" value="3"/><img src="'+rutaanimal[3]+'" class="btnAnimal" alt="'+nombreAnimal[3]+'"/></div></div>');
}else if (puntuacion<30) {
animalSeleccionado=aleatorio(1,4);
$('#contAnimales').html('<div class="arriba4"><div>Donde está el '+nombreAnimal[animalSeleccionado]+'</div><div><input type="hidden" value="1"/><img src="'+rutaanimal[1]+'" class="btnAnimal" alt="'+nombreAnimal[1]+'"/></div><div><input type="hidden" value="2"/><img src="'+rutaanimal[2]+'" class="btnAnimal" alt="'+nombreAnimal[2]+'"/></div><div><input type="hidden" value="3"/><img src="'+rutaanimal[3]+'" class="btnAnimal" alt="'+nombreAnimal[3]+'"/></div><div><input type="hidden" value="4"/><img src="'+rutaanimal[4]+'" class="btnAnimal" alt="'+nombreAnimal[4]+'"/></div></div>');	
}else if (puntuacion<50) {
animalSeleccionado=aleatorio(1,5);
$('#contAnimales').html('<div class="arriba5"><div>Donde está el '+nombreAnimal[animalSeleccionado]+'</div><div><input type="hidden" value="1"/><img src="'+rutaanimal[1]+'" class="btnAnimal" alt="'+nombreAnimal[1]+'"/></div><div><input type="hidden" value="2"/><img src="'+rutaanimal[2]+'" class="btnAnimal" alt="'+nombreAnimal[2]+'"/></div><div><input type="hidden" value="3"/><img src="'+rutaanimal[3]+'" class="btnAnimal" alt="'+nombreAnimal[3]+'"/></div><div><input type="hidden" value="4"/><img src="'+rutaanimal[4]+'" class="btnAnimal" alt="'+nombreAnimal[4]+'"/></div><div><input type="hidden" value="5"/><img src="'+rutaanimal[5]+'" class="btnAnimal" alt="'+nombreAnimal[5]+'"/></div></div>');
}else if (puntuacion<75) {
animalSeleccionado=aleatorio(1,6);
$('#contAnimales').html('<div class="arriba6"><div>Donde está el '+nombreAnimal[animalSeleccionado]+'</div><div><input type="hidden" value="1"/><img src="'+rutaanimal[1]+'" class="btnAnimal" alt="'+nombreAnimal[1]+'"/></div><div><input type="hidden" value="2"/><img src="'+rutaanimal[2]+'" class="btnAnimal" alt="'+nombreAnimal[2]+'"/></div><div><input type="hidden" value="3"/><img src="'+rutaanimal[3]+'" class="btnAnimal" alt="'+nombreAnimal[3]+'"/></div><div><input type="hidden" value="4"/><img src="'+rutaanimal[4]+'" class="btnAnimal" alt="'+nombreAnimal[4]+'"/></div><div><input type="hidden" value="5"/><img src="'+rutaanimal[5]+'" class="btnAnimal" alt="'+nombreAnimal[5]+'"/></div><div><input type="hidden" value="6"/><img src="'+rutaanimal[6]+'" class="btnAnimal" alt="'+nombreAnimal[6]+'"/></div></div>');
}else if (puntuacion<100) {
animalSeleccionado=aleatorio(1,7);
$('#contAnimales').html('<div class="arriba7"><div>Donde está el '+nombreAnimal[animalSeleccionado]+'</div><div><input type="hidden" value="1"/><img src="'+rutaanimal[1]+'" class="btnAnimal" alt="'+nombreAnimal[1]+'"/></div><div><input type="hidden" value="2"/><img src="'+rutaanimal[2]+'" class="btnAnimal" alt="'+nombreAnimal[2]+'"/></div><div><input type="hidden" value="3"/><img src="'+rutaanimal[3]+'" class="btnAnimal" alt="'+nombreAnimal[3]+'"/></div><div><input type="hidden" value="4"/><img src="'+rutaanimal[4]+'" class="btnAnimal" alt="'+nombreAnimal[4]+'"/></div><div><input type="hidden" value="5"/><img src="'+rutaanimal[5]+'" class="btnAnimal" alt="'+nombreAnimal[5]+'"/></div><div><input type="hidden" value="6"/><img src="'+rutaanimal[6]+'" class="btnAnimal" alt="'+nombreAnimal[6]+'"/></div><div><input type="hidden" value="7"/><img src="'+rutaanimal[7]+'" class="btnAnimal" alt="'+nombreAnimal[7]+'"/></div></div>');
}else{
animalSeleccionado=aleatorio(1,8);
$('#contAnimales').html('<div class="arriba8"><div>Donde está el '+nombreAnimal[animalSeleccionado]+'</div><div><input type="hidden" value="1"/><img src="'+rutaanimal[1]+'" class="btnAnimal" alt="'+nombreAnimal[1]+'"/></div><div><input type="hidden" value="2"/><img src="'+rutaanimal[2]+'" class="btnAnimal" alt="'+nombreAnimal[2]+'"/></div><div><input type="hidden" value="3"/><img src="'+rutaanimal[3]+'" class="btnAnimal" alt="'+nombreAnimal[3]+'"/></div><div><input type="hidden" value="4"/><img src="'+rutaanimal[4]+'" class="btnAnimal" alt="'+nombreAnimal[4]+'"/></div><div><input type="hidden" value="5"/><img src="'+rutaanimal[5]+'" class="btnAnimal" alt="'+nombreAnimal[5]+'"/></div><div><input type="hidden" value="6"/><img src="'+rutaanimal[6]+'" class="btnAnimal" alt="'+nombreAnimal[6]+'"/></div><div><input type="hidden" value="7"/><img src="'+rutaanimal[7]+'" class="btnAnimal" alt="'+nombreAnimal[7]+'"/></div><div><input type="hidden" value="8"/><img src="'+rutaanimal[8]+'" class="btnAnimal" alt="'+nombreAnimal[8]+'"/></div></div>');
}	

$('.btnAnimal').click(comprobarSeleccion);

},70);

}

function comprobarSeleccion(){
var animalPulsado=$(this).parent().find('input').val();
if(animalPulsado==animalSeleccionado){
$('#pagPpal').hide();
$('#pagAcierto').show();
puntuacion=puntuacion+1;
localStorage.setItem('puntuacion',puntuacion);
if (puntuacion==15||puntuacion==30||puntuacion==50||puntuacion==75||puntuacion==100) {
$('#pagNivel').show();
$('#pagAcierto').hide();
window.setTimeout(function(){
$('#pagNivel').hide();
iniciar();
},800);
}else if(puntuacion==150){
$('#pagFin').show();
$('#pagAcierto').hide();
}else{
window.setTimeout(function(){
$('#pagAcierto').hide();
iniciar();
},800);
}
}else{
$('#pagPpal').hide();
$('#pagFallo').show();
window.setTimeout(function(){
$('#pagFallo').hide();
iniciar();
},800);
}
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