const {soma, subtracao, multiplicacao, divisao} = require('./calculadora')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'n1',
        message: 'Digite o valor de n1: '
    },
    {
        name: 'n2',
        message: 'Digite o valor de n2: '
    },
    {
        name: 'calculadora',
        message: 'Qual operação você deseja realizar?',
        type: 'list',
        choices: ['soma', 'subtração', 'multiplicação', 'divisão']
    }
    
]).then((answers) => {

    let n1 = parseFloat(answers.n1)
    let n2 = parseFloat(answers.n2)
    
    if (isNaN(n1) || isNaN(n2)){
        console.log("Você precisa informar números válidos")
    }

    switch(answers.calculadora){
        case 'soma':
            console.log(soma(n1,n2));
            break
        case 'subtração':
            console.log(subtracao(n1,n2));
            break
        case 'multiplicação':
            console.log(multiplicacao(n1,n2));
            break
        case 'divisão':
            console.log(divisao(n1,n2));
            break
        default: break
    }
}).catch((err) => console.log(err))