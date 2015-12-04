//cargando modulos de node
var http = require('http'),
config = require('../config/config'),
ip = config.IP,
port = config.PORT;


//exportar la funcion que inicia el server
exports.startServer = function(appRouter){
	//creando el server
	var appServer = http.createServer(function(req, res){
		//extraigo la url de la
		//peticion
		var url = req.url;
		//intenta el ruteo
		//de la url con alguna accion
		appRouter.route(url, res);
	});
	
	appServer.listen(port, ip, function(){
		console.log("> Server listen at " + 
		"http://%s:%s", ip, port);
	});
};