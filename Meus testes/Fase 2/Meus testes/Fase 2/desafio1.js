// DESAFIO 1

const nome = "Carlos"
const peso = 84
const altura = 1.88

const imc = peso/(altura*altura)

if (imc >= 30){
    console.log(`${nome} voce esta acima do peso`)
}else{
    console.log(`${nome} voce nao esta acima do peso`)
}
// objetos
const aluno = {
    nome: "Weuller",
    nota: 9.8
}
const aluno1 = {
    nome: "Cassia",
    nota: 9.1
}
const aluno2 = {
    nome: "Salviano",
    nota: 9.9
}
//--------------------
const name = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
const media = idade+contribuicao
if (sexo == "F"){
    if( media >= 85){
        console.log(`${name}, voce pode se aposentar`)
    }else{
        console.log(`${name}, voce ainda nao pode se aposentar`)
    }
}else{
    if( media >= 95){
        console.log(`${name}, voce pode se aposentar`)
    }else{
        console.log(`${name}, voce ainda nao pode se aposentar`)
    }
}

