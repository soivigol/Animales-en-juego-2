var puntuacion=0;
var puntuacionNumeros=0;
var puntuacionNombres=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
puntuacion=Number(localStorage.getItem("puntuacion"));
puntuacionNumeros=Number(localStorage.getItem("puntuacionNumeros"));
puntuacionNombres=Number(localStorage.getItem("puntuacionNombres"));
if(puntuacion!=null){
$('#contSonidos span.puntuacion').html(puntuacion);
$('#contSonidos span.nivel').html(buscarNivel(puntuacion));
}
if(puntuacion==150){
$('#contSonidos span.superado').html('Superado') 
}
if(puntuacionNumeros!=null){
$('#contNumeros span.puntuacion').html(puntuacionNumeros);
$('#contNumeros span.nivel').html(buscarNivel(puntuacionNumeros));
}
if(puntuacionNumeros==150){
$('#contNumeros span.superado').html('Superado') 
}
if(puntuacionNombres!=null){
$('#contNombres span.puntuacion').html(puntuacionNombres);
$('#contNombres span.nivel').html(buscarNivel(puntuacionNombres));
}
if(puntuacionNombres==150){
$('#contNombres span.superado').html('Superado');
}
$('#contNombres span.restaurar').click(function(){
navigator.notification.confirm(
'¿Deseas realmente restaurar esta puntuación?', // message
Confirm,            // callback to invoke with index of button pressed
'Eliminar',           // title
['Aceptar','Cancelar']     // buttonLabels
);

function Confirm(buttonIndex) {
if(buttonIndex==1){
localStorage.setItem("puntuacionNombres","0");
puntuacionNombres=0;
$('#contNombres span.puntuacion').html(puntuacionNombres);
$('#contNombres span.nivel').html(buscarNivel(puntuacionNombres));
}
}
});
$('#contNumeros span.restaurar').click(function(){
navigator.notification.confirm(
'¿Deseas realmente restaurar esta puntuación?', // message
Confirm,            // callback to invoke with index of button pressed
'Eliminar',           // title
['Aceptar','Cancelar']     // buttonLabels
);

function Confirm(buttonIndex) {
if(buttonIndex==1){
localStorage.setItem("puntuacionNumeros","0");
puntuacionNumeros=0;
$('#contNumeros span.puntuacion').html(puntuacionNumeros);
$('#contNumeros span.nivel').html(buscarNivel(puntuacionNumeros));
}
}
});
$('#contSonidos span.restaurar').click(function(){
navigator.notification.confirm(
'¿Deseas realmente restaurar esta puntuación?', // message
Confirm,            // callback to invoke with index of button pressed
'Eliminar',           // title
['Aceptar','Cancelar']     // buttonLabels
);

function Confirm(buttonIndex) {
if(buttonIndex==1){
localStorage.setItem("puntuacion","0");
puntuacion=0;
 $('#contSonidos span.puntuacion').html(puntuacion);
$('#contSonidos span.nivel').html(buscarNivel(puntuacion));
}
}
});

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