const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const PORT = 5000;



let Middleware = (req, res)=>{ // Isso é um Middleware, básicamente é parece uma função que precisa receber req e res para poder trata-los dentro do seu bloco e podendo ser reutilizado

    res.send('<h1>Helllo World</h1>');
};

// let MiddlewareMethod = (req, res, next) => {
//     console.log(req.method);
//     next()
// };

let MiddlewareBody = (req, res, next) => {
    console.log(req.body) // O req.body é usado para que a gente pegue os corpo da requisição, pois pode ter dados que precisamos amarzenar ou tratar dentro dele
    next() // ao usar Middleware é necessario usar o next quanto terminar o bloco, pois ele passará para a proxima execução ou vc pode tbm tratar o erro dentro da execução do next
}

app.use('/', bodyParser.json()) // convertendo o body para um json, pois no teste que estava fazendo no insomnia a é mandado um json
app.use('/', MiddlewareBody)

app.get('/', Middleware);

app.post('/', Middleware);

app.put('/', Middleware);

app.delete('/', Middleware);

app.listen(PORT, ()=>{
    console.log('Servidor rodando!');
});