module.exports = function(app){
	app.get('/produtos', function(request, response){
		response.send('<h1>DEU CERTO!!! HAHAHA!!!!</h1>');
		// var mySql = require('mysql');
		// var connection = mySql.createConnection({
		// 	host: 'localhost',
		// 	user: 'root',
		// 	password: '',
		// 	database: 'casadocodigo'
		// });;

		// connection.query('select * from livros', function(err,results){
		// 	response.send(results);
		// });

		// connection.end();
	});
}
