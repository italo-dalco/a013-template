
//EXERCÍCIO 1-----------------------------------------------------------------------------


// const labank = prompt("Insira sua idade")
//     if(labank >= 13 && labank <= 17){
//         alert("Seu dependente já pode ter um cartão de crédito vinculado ao seu.")
//         console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu.")
//     } else {
//         alert("Consulte outras possibilidades do Labank.")
//         console.log("Consulte outras possibilidades do Labank.")
//     }


//EXERCÍCIO 1-----------------------------------------------------------------------------


// const idadeDependente = Number(prompt("Qual a idade do dependente?"))

// idadeDependente === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão.")
// : console.log("Verifique as opções possíveis.")


//EXERCÍCIO 3-----------------------------------------------------------------------------


// 1 para ‘Fácil’
// 2 para ‘Black’
// 3 para ‘Platinum’
// 4 para ‘Master Gold’
// E caso não seja nenhuma dessas opções a mensagem deve ser
// ‘Escolha umas das quatro opções disponíveis’

// let Labank

// const servicosLabank = Number(prompt("Escolha a opção desejada: 1 para Fácil, 2 para Black, 3 para Platinum, 4 para Master Gold"))

// switch(servicosLabank){
//     case 1 :
//         console.log("Fácil")
//         break
//     case 2 :    
//         console.log("Black")
//         break
//     case 3 :
//         console.log("Platinum")
//         break
//     case 4 :
//         console.log("Master Gold")
//         break
//     default :
//         console.log("Escolha uma das quatro opções possíveis")    
// }


//EXERCÍCIO 4-----------------------------------------------------------------------------


// Crie um código que receba um número por prompt e verifique se um número
// é divisível por 2 e por 3. Faça isso:
//  Utilizando ifs aninhados
// Utilizando um operador lógico para unir duas operações relacionais


let numero = Number(prompt("Insira um número"))

if(numero % 2 === 0 && numero % 3 === 0){
    console.log("O número é divisível por 2 e por 3")
} else {
    console.log("O número não é divisível por 2 e por 3")
}



