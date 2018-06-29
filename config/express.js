var express = require('express');
var app = express();

console.log("modulo rodando")
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = function (){
	return app;
}
