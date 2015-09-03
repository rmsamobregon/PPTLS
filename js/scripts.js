var calculos = {
	piedra:{piedra:"empata", papel:"pierde", tijera:"gana", lagarto:'gana', spock:'pierde'},
	papel:{piedra:"gana", papel:"empata", tijera:"pierde", lagarto:'pierde', spock:'gana'},
	tijera:{piedra:"pierde", papel:"gana", tijera:"empata", lagarto:'gana', spock:'pierde'},
	lagarto:{piedra:"gana", papel:"pierde", tijera:"gana", lagarto:'empata', spock:'gana'},
	spock:{piedra:"pierde", papel:"gana", tijera:"pierde", lagarto:'pierde', spock:'empata'}
};
var puntosJug = 0;
var puntosCpu = 0;
var ppt = ["piedra", "papel", "tijera"];
var pptls = ["piedra", "papel", "tijera", "lagarto", "spock"];
var pptlsc = ["piedra", "papel", "tijera", "lagarto", "spock", "caruso"];
var opciones;
var tabla = new Array();
function JugadorJuega(type, jugadaJug){
	if (puntosCpu < 3 && puntosJug < 3){
		switch(type) {
		    case 'ppt':
		        opciones = ppt;
		        break;
		    case 'pptls':
		        opciones = pptls;
		        break;
		    case 'pptlsc':
		        opciones = pptlsc;
		        break;
		}
		var jugadaCpu = opciones[Math.floor(Math.random()*opciones.length)];
		var imageJug = '<span class="image '+jugadaJug+'"> </span>';
		var imageCpu = '<span class="image '+jugadaCpu+'"> </span>';
		$('.juegajug').html(imageJug);
		$('.juegacpu').html(imageCpu);
		switch(calculos[jugadaJug][jugadaCpu]){
			case 'pierde':
					puntosCpu++;
				break;
			case 'gana':
					puntosJug++;
				break;
		}
	}else{
		puntosCpu = 0;
		puntosJug = 0;
	}
	$('.score.cpu').html(puntosCpu);
	$('.score.jug').html(puntosJug);
	console.log('Jugador: '+jugadaJug+'    Cpu: '+jugadaCpu+'  Resultado: '+calculos[jugadaJug][jugadaCpu])
}