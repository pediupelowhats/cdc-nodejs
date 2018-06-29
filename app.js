var configura = require('./config/express');
var app = configura();

var rotasProdutos = require('./app/routes/produtos')(app);

app.listen(3000, function() {
	console.log('Servidor rodando...');
});