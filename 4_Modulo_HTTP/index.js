const http = require('http'); // http bem importante, mas já foi substituido pelo uso do express
const url = require('url') // url da acesso as urls que vamos trabalhar
const fs = require('fs');

function handleFile(req, res, callback){

    let path = url.parse(req.url).pathname; //4 - recebendo a url que foi acessada

    let fileName = '.' + path; //5 - variavel que recebe o final da url para procurar o arquivo que tem o msm nome e retorna-lo

    fs.readFile(fileName, (err, data)=>{ //3 - tratando arquivos.. OBS: tentei condicionar o callback, antes de chamar o fs e não funcionou, não descobrir a causa, o data do fs não conseguia ser escrito no res.write(), já se eu chamasse antes de condicionar funcionava.

        if(err){ // trantado erros

            if(callback){
                
                if(!callback(req, res)){ // podemos tratar chamadas de metodos , essa função que é chamada handleRequest é exemplo disso
                    res.writeHead(404, { 'Content-Type' : 'text/html; charset=utf-8' })
                    res.end('<h1>Página não encontrada!</h1>')
                }
            }
        
        }else{ // se achar o arquivo da url, escreve os dados
            res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'})
            res.write(data)
            res.end()
        }
    })
}

function handleRequest(req, res){ // tratando requests, mas ta muito em aberto aqui , não precisa se preocupar em ler esse código, só deixa em aberto que se trata as requests em uma func separado

    let path = url.parse(req.url).pathname;

    let metodo = req.method
    console.log(metodo)
    
    if(path == '/teste'){
        res.end(path)
        return true
    }

    return false

}



http.createServer((request, response) =>{ // 1- creando um sevidor local

    handleFile(request, response, handleRequest)    

}).listen(3000, (error) => { // 2- escutando a req na porta 3000

    if(error){
        console.log(error)
    }else{
        console.log('Servidor Rodando!')
    }
})
