const express = require('express')
const bodyParser = require('body-parser')
const aluno = require('./routes/aluno')

const app = express()
const PORT = 5000

let alunos = [
    {id: 0, nome: 'junior', sobrenome: 'ferreira'},
    {id: 1, nome: 'larissa', sobrenome: 'alves'},
    {id: 2, nome: 'gabriel', sobrenome: 'silva'},
    {id: 3, nome: 'thiago', sobrenome: 'chaves'}
]

app.use(bodyParser.urlencoded())

app.use('/aluno', aluno)

app.get('/', (req, res) =>{ 

    res.send('<h1>Hello World</h1>')
})

app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Sevidor Rodando!')
    }
})