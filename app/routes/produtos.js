module.exports = function(app){
	app.get('/produtos', function(request, response){
		// var mySql = require('mysql');
		// var connection = mySql.createConnection({
		// 	host: 'mysql.hostinger.com.br',
		// 	user: 'u674129031_cdc',
		// 	password: 'Euvoda1s32',
		// 	database: 'u674129031_cdc'
		// });
		var porta = process.env.PORT || 3000;
		response.send('<h1>Aplicação rodando no heroku na porta ' + porta + '</h1>');

		// connection.query('select * from livros', function(err,results){
		// 	response.send(results);
		// });

		// connection.end();
		});
}
