const express = require('express');
const router = express.Router();

let alunos = [
    {id: 0, nome: 'junior', sobrenome: 'ferreira'},
    {id: 1, nome: 'larissa', sobrenome: 'alves'},
    {id: 2, nome: 'gabriel', sobrenome: 'silva'},
    {id: 3, nome: 'thiago', sobrenome: 'chaves'}
];

router.get('/all', (req, res) =>{ 
    
    res.json(JSON.stringify(alunos));
});

router.get('/', (req, res, next) =>{

    console.log(req.body);

    let aluno = alunos[req.body.id];

    if(req.body.id > alunos.length){
        console.log('Aluno não encontrado');
        res.send('Aluno não encontrado');
    }else{
        if(aluno){
            res.json(aluno);
        }else{
            next();
        };
    };
});

router.get('/', (req, res) => { 

    console.log(req.query); //query

    let aluno = alunos[req.query.id];

    if(aluno){
        res.json(aluno);
    }else{
        console.log('Aluno não encontrado');
        res.send('Aluno não encontrado');
    };
});

router.get('/:id', (req, res) => { 

    console.log(req.params); //parametro

    let aluno = alunos[req.params.id];

    if(aluno){
        res.json(aluno);
    }else{
        console.log('Aluno não encontrado');
        res.send('Aluno não encontrado');
    }
});

module.exports = router;