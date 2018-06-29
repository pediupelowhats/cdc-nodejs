var configura = require('./config/express');
var app = configura();

var rotasProdutos = require('./app/routes/produtos')(app);

var porta = process.env.PORT || 3000
app.listen(3000, function() {
	console.log('Servidor rodando na porta ' + porta);
});