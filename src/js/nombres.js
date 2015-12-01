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
animal[9]=aleatorio(1,21);
}
}
if(animal[9]==animal[1]||animal[9]==animal[2]||animal[9]==animal[3]||animal[9]==animal[4]||animal[9]==animal[5]||animal[9]==animal[6]||animal[9]==animal[7]||animal[9]==animal[8]){
while(animal[9]==animal[1]||animal[9]==animal[2]||animal[9]==animal[3]||animal[9]==animal[4]||animal[9]==animal[5]||animal[9]==animal[6]||animal[9]==animal[7]||animal[9]==animal[8]){
animal[9]=aleatorio(1,21);
}
}
if(animal[10]==animal[1]||animal[10]==animal[2]||animal[10]==animal[3]||animal[10]==animal[4]||animal[10]==animal[5]||animal[10]==animal[6]||animal[10]==animal[7]||animal[10]==animal[8]||animal[10]==animal[8]||animal[11]==animal[9]){
while(animal[10]==animal[1]||animal[10]==animal[2]||animal[10]==animal[3]||animal[10]==animal[4]||animal[10]==animal[5]||animal[10]==animal[6]||animal[10]==animal[7]||animal[10]==animal[8]||animal[10]==animal[9]){
animal[10]=aleatorio(1,21);
}
}
if(animal[11]==animal[1]||animal[11]==animal[2]||animal[11]==animal[3]||animal[11]==animal[4]||animal[11]==animal[5]||animal[11]==animal[6]||animal[11]==animal[7]||animal[11]==animal[8]||animal[11]==animal[8]||animal[11]==animal[9]||animal[11]==animal[10]){
while(animal[11]==animal[1]||animal[11]==animal[2]||animal[11]==animal[3]||animal[11]==animal[4]||animal[11]==animal[5]||animal[11]==animal[6]||animal[11]==animal[7]||animal[11]==animal[8]||animal[11]==animal[9]||animal[11]==animal[10]){
animal[11]=aleatorio(1,21);
}
}
if(animal[12]==animal[1]||animal[12]==animal[2]||animal[12]==animal[3]||animal[12]==animal[4]||animal[12]==animal[5]||animal[12]==animal[6]||animal[12]==animal[7]||animal[12]==animal[8]||animal[12]==animal[8]||animal[12]==animal[9]||animal[12]==animal[10]||animal[12]==animal[11]){
while(animal[12]==animal[1]||animal[12]==animal[2]||animal[12]==animal[3]||animal[12]==animal[4]||animal[12]==animal[5]||animal[12]==animal[6]||animal[12]==animal[7]||animal[12]==animal[8]||animal[12]==animal[9]||animal[12]==animal[10]||animal[12]==animal[11]){
animal[12]=aleatorio(1,21);
}
}
if(animal[13]==animal[1]||animal[13]==animal[2]||animal[13]==animal[3]||animal[13]==animal[4]||animal[13]==animal[5]||animal[13]==animal[6]||animal[13]==animal[7]||animal[13]==animal[8]||animal[13]==animal[8]||animal[13]==animal[9]||animal[13]==animal[10]||animal[13]==animal[11]||animal[13]==animal[12]){
while(animal[13]==animal[1]||animal[13]==animal[2]||animal[13]==animal[3]||animal[13]==animal[4]||animal[13]==animal[5]||animal[13]==animal[6]||animal[13]==animal[7]||animal[13]==animal[8]||animal[13]==animal[9]||animal[13]==animal[10]||animal[13]==animal[11]||animal[13]==animal[12]){
animal[13]=aleatorio(1,21);
}
}
if(animal[14]==animal[1]||animal[14]==animal[2]||animal[14]==animal[3]||animal[14]==animal[4]||animal[14]==animal[5]||animal[14]==animal[6]||animal[14]==animal[7]||animal[14]==animal[8]||animal[14]==animal[8]||animal[14]==animal[9]||animal[14]==animal[10]||animal[14]==animal[11]||animal[14]==animal[12]||animal[14]==animal[13]){
while(animal[14]==animal[1]||animal[14]==animal[2]||animal[14]==animal[3]||animal[14]==animal[4]||animal[14]==animal[5]||animal[14]==animal[6]||animal[14]==animal[7]||animal[14]==animal[8]||animal[14]==animal[9]||animal[14]==animal[10]||animal[14]==animal[11]||animal[14]==animal[12]||animal[14]==animal[13]){
animal[14]=aleatorio(1,21);
}
}
if(animal[15]==animal[1]||animal[15]==animal[2]||animal[15]==animal[3]||animal[15]==animal[4]||animal[15]==animal[5]||animal[15]==animal[6]||animal[15]==animal[7]||animal[15]==animal[8]||animal[15]==animal[8]||animal[15]==animal[9]||animal[15]==animal[10]||animal[15]==animal[11]||animal[15]==animal[12]||animal[15]==animal[13]||animal[15]==animal[14]){
while(animal[15]==animal[1]||animal[15]==animal[2]||animal[15]==animal[3]||animal[15]==animal[4]||animal[15]==animal[5]||animal[15]==animal[6]||animal[15]==animal[7]||animal[15]==animal[8]||animal[15]==animal[9]||animal[15]==animal[10]||animal[15]==animal[11]||animal[15]==animal[12]||animal[15]==animal[13]||animal[15]==animal[14]){
animal[15]=aleatorio(1,21);
}
}
if(animal[16]==animal[1]||animal[16]==animal[2]||animal[16]==animal[3]||animal[16]==animal[4]||animal[16]==animal[5]||animal[16]==animal[6]||animal[16]==animal[7]||animal[16]==animal[8]||animal[16]==animal[8]||animal[16]==animal[9]||animal[16]==animal[10]||animal[16]==animal[11]||animal[16]==animal[12]||animal[16]==animal[13]||animal[16]==animal[14]||animal[16]==animal[15]){
while(animal[16]==animal[1]||animal[16]==animal[2]||animal[16]==animal[3]||animal[16]==animal[4]||animal[16]==animal[5]||animal[16]==animal[6]||animal[16]==animal[7]||animal[16]==animal[8]||animal[16]==animal[9]||animal[16]==animal[10]||animal[16]==animal[11]||animal[16]==animal[12]||animal[16]==animal[13]||animal[16]==animal[14]||animal[16]==animal[15]){
animal[16]=aleatorio(1,21);
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
tx.executeSql("SELECT * FROM animales WHERE id='"+animal[9]+"'",[],function(tx,res){
rutaanimal[9]=res.rows.item(0).imagen;
nombreAnimal[9]=res.rows.item(0).nombre;
});tx.executeSql("SELECT * FROM animales WHERE id='"+animal[10]+"'",[],function(tx,res){
rutaanimal[10]=res.rows.item(0).imagen;
nombreAnimal[10]=res.rows.item(0).nombre;
});tx.executeSql("SELECT * FROM animales WHERE id='"+animal[11]+"'",[],function(tx,res){
rutaanimal[11]=res.rows.item(0).imagen;
nombreAnimal[11]=res.rows.item(0).nombre;
});tx.executeSql("SELECT * FROM animales WHERE id='"+animal[12]+"'",[],function(tx,res){
rutaanimal[12]=res.rows.item(0).imagen;
nombreAnimal[12]=res.rows.item(0).nombre;
});tx.executeSql("SELECT * FROM animales WHERE id='"+animal[13]+"'",[],function(tx,res){
rutaanimal[13]=res.rows.item(0).imagen;
nombreAnimal[13]=res.rows.item(0).nombre;
});tx.executeSql("SELECT * FROM animales WHERE id='"+animal[14]+"'",[],function(tx,res){
rutaanimal[14]=res.rows.item(0).imagen;
nombreAnimal[14]=res.rows.item(0).nombre;
});tx.executeSql("SELECT * FROM animales WHERE id='"+animal[15]+"'",[],function(tx,res){
rutaanimal[15]=res.rows.item(0).imagen;
nombreAnimal[15]=res.rows.item(0).nombre;
});tx.executeSql("SELECT * FROM animales WHERE id='"+animal[16]+"'",[],function(tx,res){
rutaanimal[16]=res.rows.item(0).imagen;
nombreAnimal[16]=res.rows.item(0).nombre;
});
});

window.setTimeout(function(){
if (puntuacion<15) {
animalSeleccionado=aleatorio(1,4);
$('#contAnimales').html('<div class="nombre4"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div></div>');
}else if (puntuacion<30) {
animalSeleccionado=aleatorio(1,6);
$('#contAnimales').html('<div class="nombre6"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div></div>');	
}else if (puntuacion<50) {
animalSeleccionado=aleatorio(1,8);
$('#contAnimales').html('<div class="nombre8"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div></div>');
}else if (puntuacion<75) {
animalSeleccionado=aleatorio(1,10);
$('#contAnimales').html('<div class="nombre10"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div><div class="btnAnimal" ><input type="hidden" value="9"/>'+nombreAnimal[9]+'</div><div class="btnAnimal" ><input type="hidden" value="10"/>'+nombreAnimal[10]+'</div></div>');
}else if (puntuacion<100) {
animalSeleccionado=aleatorio(1,13);
$('#contAnimales').html('<div class="nombre13"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div><div class="btnAnimal" ><input type="hidden" value="9"/>'+nombreAnimal[9]+'</div><div class="btnAnimal" ><input type="hidden" value="10"/>'+nombreAnimal[10]+'</div><div class="btnAnimal" ><input type="hidden" value="11"/>'+nombreAnimal[11]+'</div><div class="btnAnimal" ><input type="hidden" value="12"/>'+nombreAnimal[12]+'</div><div class="btnAnimal" ><input type="hidden" value="13"/>'+nombreAnimal[13]+'</div></div>');
}else{
animalSeleccionado=aleatorio(1,16);
$('#contAnimales').html('<div class="nombre16"><div>¿Como se llama este animal? '+nombreAnimal[animalSeleccionado]+'</div><div class="btnAnimal" ><input type="hidden" value="1"/>'+nombreAnimal[1]+'</div><div class="btnAnimal" ><input type="hidden" value="2"/>'+nombreAnimal[2]+'</div><div class="btnAnimal" ><input type="hidden" value="3"/>'+nombreAnimal[3]+'</div><div class="btnAnimal" ><input type="hidden" value="4"/>'+nombreAnimal[4]+'</div><div class="btnAnimal" ><input type="hidden" value="5"/>'+nombreAnimal[5]+'</div><div class="btnAnimal" ><input type="hidden" value="6"/>'+nombreAnimal[6]+'</div><div class="btnAnimal" ><input type="hidden" value="7"/>'+nombreAnimal[7]+'</div><div class="btnAnimal" ><input type="hidden" value="8"/>'+nombreAnimal[8]+'</div><div class="btnAnimal" ><input type="hidden" value="9"/>'+nombreAnimal[9]+'</div><div class="btnAnimal" ><input type="hidden" value="10"/>'+nombreAnimal[10]+'</div><div class="btnAnimal" ><input type="hidden" value="11"/>'+nombreAnimal[11]+'</div><div class="btnAnimal" ><input type="hidden" value="12"/>'+nombreAnimal[12]+'</div><div class="btnAnimal" ><input type="hidden" value="13"/>'+nombreAnimal[13]+'</div><div class="btnAnimal" ><input type="hidden" value="14"/>'+nombreAnimal[14]+'</div><div class="btnAnimal" ><input type="hidden" value="15"/>'+nombreAnimal[15]+'</div><div class="btnAnimal" ><input type="hidden" value="16"/>'+nombreAnimal[16]+'</div></div>');
}	

$('.btnAnimal').click(comprobarSeleccion);

},70);

}

function comprobarSeleccion(){
var animalPulsado=$(this).find('input').val();
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