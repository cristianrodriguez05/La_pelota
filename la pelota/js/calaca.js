

function Calaca(x,y){
	this.img = $("#calaca_1")[0];	
	this.x = 300;
	this.y = 200;
	this.velocidad = 0;
	this.accion = " "
			
	this.dibujar = function(ctx){
		var img = this.img;
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img,this.x,this.y);
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.font = "12px sans-serif";
		ctx.fillText("velocidad: "+ this.velocidad,x,y);
		ctx.restore();
	}

	this.actualizar = function(direc){
		this.velocidad = 5;
		if(direc=="derecha"){
			this.accion="derecha";
		}
		if(direc=="izquierda"){
			this.accion="izquierda";
		}
		if(direc=="arriba"){
			this.accion="arriba";
		}
		if(direc=="abajo"){
			this.accion="abajo";
		}

		if(direc=="arribader"){
			this.accion="arribader";
		}
		if(direc=="arribaizq"){
			this.accion="arribaizq";
		}
		if(direc=="abajoder"){
			this.accion="abajoder";
		}
		if(direc=="abajoizq"){
			this.accion="abajoizq";
		}
	}
	
	this.renovar = function(){
		if(this.accion=="derecha"  && this.x > 15){
			this.x += this.velocidad;
			if(this.x > 585){
				this.accion="izquierda";
			}
		}
		if(this.accion=="izquierda"  && this.x < 600){
			this.x -= this.velocidad;
			if(this.x < 30){
				this.accion="derecha";
			}
		}
		if(this.accion=="abajo"  && this.y < 400){
			this.y += this.velocidad;
			if(this.y > 385){
				this.accion="arriba";
			}
		}
		if(this.accion=="arriba" && this.y > 15){
			this.y -= this.velocidad;
			if(this.y < 30){
				this.accion="abajo";
			}
		}



		if(this.accion=="arribader"){
			this.x += this.velocidad;
			this.y -= this.velocidad;
			if(this.x > 585){
				this.accion="arribaizq";
			}
			if(this.y < 30){
				this.accion="abajoder";
			}
		}
		if(this.accion=="arribaizq"){
			this.x -= this.velocidad;
			this.y -= this.velocidad;
			if(this.x < 30){
				this.accion="arribader";
			}
			if(this.y < 30){
				this.accion="abajoizq";
			}
		}
		if(this.accion=="abajoder"){
			this.x += this.velocidad;
			this.y += this.velocidad;
			if(this.x > 585){
				this.accion="abajoizq";
			}
			if(this.y > 385){
				this.accion="arribader";
			}
		}
		if(this.accion=="abajoizq"){
			this.x -= this.velocidad;
			this.y += this.velocidad;
			if(this.x < 30){
				this.accion="abajoder";
			}
			if(this.y > 385){
				this.accion="arribaizq";
			}
		}


		
	}
	
	this.tiempo = function(){
		if(this.velocidad > 0){
			this.velocidad -= 1;
		}
	}

}
