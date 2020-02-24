
var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	calacas = new Calaca();
	run();
	tiempo();	
	
}

function capturaTeclado(event){
	if(event.which==38 || event.which==104)
		calacas.actualizar('arriba');
	if(event.which==40 || event.which==98)
		calacas.actualizar('abajo');
	if(event.which==39 || event.which==102)
		calacas.actualizar('derecha');
	if(event.which==37 || event.which==100)
		calacas.actualizar('izquierda');
	if(event.which==105)
		calacas.actualizar('arribader');
	if(event.which==103)
		calacas.actualizar('arribaizq');
	if(event.which==99)
		calacas.actualizar('abajoder');
	if(event.which==97)
		calacas.actualizar('abajoizq');
	
}
function tiempo(){ 
	setTimeout("tiempo()",2500);
	calacas.tiempo();
}
function run(){ 
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");	 
	if(jugando){  

		calacas.dibujar(contextoBuffer);
		calacas.renovar();		
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
	}
	
}


