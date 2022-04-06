const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 5000

let alunos = [
    {id: 0, nome: 'junior', sobrenome: 'ferreira'},
    {id: 1, nome: 'larissa', sobrenome: 'alves'},
    {id: 2, nome: 'gabriel', sobrenome: 'silva'},
    {id: 3, nome: 'thiago', sobrenome: 'chaves'}
]

app.use(bodyParser.urlencoded()) // aqui o bodyParser.urlencoded() está pegando a url e transformando em body para que possamos usar... É a traves desse urlncoded que vamos conseguir pegar dados de formulários a outra maneira que pega json

app.get('/', (req, res) =>{ // ao receber http://localhost:5000 normal vamos receber o hello world

    res.send('<h1>Hello World</h1>')
})

app.get('/aluno/all', (req, res) =>{ // ao receber http://localhost:5000/alunos vamos receber a lista de alunos
    
    res.json(JSON.stringify(alunos))
})

app.get('/aluno', (req, res, next) =>{ // ao receber http://localhost:5000/aluno e passar em um formulario no insomnia o id e o valor do id, recebemos o aluno

    console.log(req.body)

    let aluno = alunos[req.body.id]

    if(req.body.id > alunos.length){
        console.log('Aluno não encontrado')
        res.send('Aluno não encontrado')
    }else{
        if(aluno){
            res.json(aluno)
        }else{
            next()
        }
    }
})

app.get('/aluno', (req, res) => { // ao receber http://localhost:5000/aluno?id=2 recebemos o aluno, pois definimos uma query

    console.log(req.query) //query

    let aluno = alunos[req.query.id]

    if(aluno){
        res.json(aluno)
    }else{
        console.log('Aluno não encontrado')
        res.send('Aluno não encontrado')
    }
})

app.get('/aluno/:id', (req, res) => { // ao receber http://localhost:5000/aluno/2 recebemos o aluno, pois definimos um parametro

    console.log(req.params) //parametro

    let aluno = alunos[req.params.id]

    if(aluno){
        res.json(aluno)
    }else{
        console.log('Aluno não encontrado')
        res.send('Aluno não encontrado')
    }
})

// OBS: A maneira de usar o parametro e query deixa visivel informações no url, já o body oculta os dados.

app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Sevidor Rodando!')
    }
})