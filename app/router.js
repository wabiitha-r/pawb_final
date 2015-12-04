//importando handlers
var handlers = 
			require('./handlers'),
	staticServer = 
			require('./static.server'),
	 fs =
			require('fs');
			
			
			
exports.route = function(url, res){
	console.log(">Enrutando la peticion: " +
	  "%s", url);
	  //verificando si la ruta que se desea servir es
	  //contenido estatico
	  
	  //verificar si existe un manejador 
	  //para la url que se pide
	  if(typeof(handlers[url])  === 'function'){
		  //existe el handler
		  //enrutando url con su handler
		  handlers[url](res)
		 }else{
			//mandamos a servir la ruta estatica
				staticServer.serve(url, res);
				
	
			 
	 }
};
