const alunosA = [
    {
        nome: "Weuller",
        nota: 9.8
    },
    {
        nome: "Cassia",
        nota: 7.8
    },
    {
        nome: "Salviano",
        nota: 9.5
    }
]

const alunosB = [
    {
        nome: "Cleiton",
        nota: 9.0
    },
    {
        nome: "Ctobson",
        nota: 5.8
    },
    {
        nome: "Sbete",
        nota: 8.5
    },
    {
        nome: 'Novo Aluno',
        nota: 5.0
    },
    {
        nome: 'cleiton',
        nota: 1.0
    },
    {
        nome: 'asdas',
        nota: 1.0
    }
]

function calculaMedia (alunos){
    let soma=0;
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos [i].nota
    }
    const media = soma/alunos.length
    return media

}

const media1 = calculaMedia(alunosA)
const media2 = calculaMedia(alunosB)

enviarMSG(media1, 'turmaA')
enviarMSG(media2, 'turmaB')

function enviarMSG(media, turma){
    if (media>5){
        console.log(`A media da ${turma} foi de ${media}, Parabens`)
    }else{
        console.log(`A media da ${turma} é menor que 5`)
    }
}