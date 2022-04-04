// console.log(process.argv)
// let calc = require("./calc") versão do programador br
let {soma, mult} = require('./calc') // versão mais atual e utilizada de desconstrução

let args = process.argv.slice(2)

// console.log(args)

let a = Number(args[1])
let b = Number(args[2])

let c = ''

if(args[0] == 'soma'){

    c = soma(a,b)
}else if(args[0] == 'mult'){

    c = mult(a,b)
}else{

    c = 'Opção invalida'
}

console.log(c)