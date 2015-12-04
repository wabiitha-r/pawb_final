var gabypaxho = {
	"nombres" : "tipolina",
	"apellidos" : "Regidor Montealegre",
	"edad" : 2,
	"sexo" : "m",
	"puesto" : "hija"
};

//exportando modulo como un todo
module.exports = {
	"/" : function(res){
		//manejador de ruta vacia
		res.writeHead(200,{
			"Content-Type" : "text/plain"
		});
		res.end('Ruta Raiz en construccion...');
	},
	"/gabypaxho" : function(res){
		//manejador de ruta vacia
		res.writeHead(200,{
			"Content-Type" : "application/json"
		});
		// serializando la respuesta
		var jsonResponse = JSON.stringify(gabypaxho);
		//contesto el Json
		res.end(jsonResponse);
		
	},
	
	"/gaby/pasho" : function(res){
		//manejador de ruta vacia
		res.writeHead(200,{
			"Content-Type" : "text/plain"
		});
		res.end('Ruta /gaby/pasho en construccion me caes gordo ya dejame... :@');
		
	}
	
};

