var audio;
var md1;
var android4=false;
var puntuacion=0;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	var tipo=localStorage.getItem('tipoResultado');
	puntuacion=Number(localStorage.getItem("puntuacion"));
	$('#reiniciarEsto').click(function(){
	localStorage.setItem("puntuacion","0");
	localStorage.setItem('dondeViene','');
	window.history.back();
	});
	var expr=/^4/;
		var cadena=device.version;
		if(expr.test(cadena)){
		android4=true;
		}
		audio=document.createElement('audio');
	if(tipo=='acierto'){
		$('#pagAcierto').show();
		audio.src='audio/Aplausos.mp3';
		audio.play();
		if(android4){
		md1 = new Media('file:///android_asset/www/audio/Aplausos.mp3');
		md1.play();	
		}
		window.setTimeout(function(){
		audio.pause();
		if(android4){
			md1.stop();
		}
		if(puntuacion==15||puntuacion==30||puntuacion==50||puntuacion==75||puntuacion==100){
			$('#pagAcierto').hide();
			$('#pagNivel').show();audio.src='audio/Nivel.mp3';
		audio.play();
		if(android4){
		md1 = new Media('file:///android_asset/www/audio/Nivel.mp3');
		md1.play();	}
		}
			window.setTimeout(function(){
			localStorage.setItem('dondeViene','acierto.html');			  window.history.back();
			},2500);
		}else if(puntuacion==150){
			$('#pagAcierto').hide();
			$('#pagFin').show();
			audio.src='audio/Fin.mp3';
		audio.play();
		if(android4){
		md1 = new Media('file:///android_asset/www/audio/Fin.mp3');
		md1.play();	}
		}
		}else{
			localStorage.setItem('dondeViene','acierto.html');			  window.history.back();
		}
		},2500);
	}else{
		$('#pagFallo').show();
		audio.src='audio/Fallo.mp3';
		audio.play();
		if(android4){
		md1 = new Media('file:///android_asset/www/audio/Fallo.mp3');
		md1.play();	
		}
		window.setTimeout(function(){
		audio.pause();
		if(android4){
			md1.stop();
		}

		window.history.back();
		localStorage.setItem('dondeViene','acierto.html');
		},2500);
	}
}