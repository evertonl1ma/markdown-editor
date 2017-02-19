// Adicionando as dependências
var express= require("express");
var app= express();

// ejs para as views
app.set("view engine", "ejs");

// pasta publica para os arquivos .css, .js etc.
app.use(express.static(__dirname + "/public"));

// rotas
app.get("/", function(request, response) {
	response.render("pad");
});

// escutando a porta 8000
var port= process.env.PORT || 3000;     
app.listen(port);
