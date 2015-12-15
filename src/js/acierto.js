var audio;
var md1;
var android4=false;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	var tipo=localStorage.getItem('tipoResultado');
	var expr=/^4/;
		var cadena=device.version;
		if(expr.test(cadena)){
		android4=true;
		}
		audio=document.createElement('audio');
	if(tipo=='acierto'){
		$('#pagAcierto').show();
		audio.src='audio/acierto.mp3';
		audio.play();
		if(android4){
		md1 = new Media('file:///android_asset/www/audio/acierto.mp3');
		md1.play();	
		}
		window.setTimeout(function(){
		audio.pause();
		if(android4){
			md1.stop();
		}
		},2500);
	}else{
		$('#pagFallo').show();
		audio.src='audio/fallo.mp3';
		audio.play();
		if(android4){
		md1 = new Media('file:///android_asset/www/audio/fallo.mp3');
		md1.play();	
		}
		window.setTimeout(function(){
		audio.pause();
		if(android4){
			md1.stop();
		}
		},2500);
	}
	window.history.back();
	localStorage.setItem('dondeViene','acierto.html')
}