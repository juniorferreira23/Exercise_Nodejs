const express = require('express');
const path = require('path')

const app = express()

const PORT = 5000

app.use('/mysite', express.static(path.join(__dirname, 'client')))// .use() é usado para quando pode receber qualquer tipo de metodo(get,post, put, delete) =====  os argumentos são 1º - se tem alguma caminho antes do seu diretorio do site por isso deixei com mysite para não encontrar uma pagina ==== 2º - esse express.static é para páginas estaticas, só sei isso até agora ==== 3º - diretorio do arquivo

app.get('/', (req, res)=>{

    res.send('<h1>Helllo World From GET</h1>')
})

app.post('/', (req, res) => {
    res.send('<h1>Helllo World From POST</h1>')
})

app.put('/', (req, res) => {
    res.send('<h1>Helllo World From PUT</h1>')
})

app.delete('/', (req, res) => {
    res.send('<h1>Helllo World From DELETE</h1>')
})

app.listen(PORT, ()=>{
    console.log('Servidor rodando!')
})