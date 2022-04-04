let fs = require('fs'); // fs um modulo muito importante que vai dá a possibilidade de mexer com arquivos, ler , escrever, apagar, etc...

// console.log(fs)

let args = process.argv.slice(2); // process.argv pega os argumento que inputamos junto ao inicial do script... EX: node upperCase teste.txt
//teste.txt é o argumento input, diferente do python que dá para inputar dados durante a execução no terminal aqui precisa ser antes

// console.log(args)

fs.readFile(args[0], "utf-8", (error, data) => { // readFile lendo dado, recebe de argumento o diretorio e um callback
    if(error) throw error; // trantar erros é muito importante no lado do back-end, pois direfente do front-end, em alguns caso não vai te retornar um erro se não tratar

    // console.log(data);

    fs.writeFile('teste.txt', data.toLocaleUpperCase(), (error) => { // writeFile escreve no arquivo direcionado
        if(error) throw error;
        
        console.log('Arquivo modificado com sucesso')
    });
});

