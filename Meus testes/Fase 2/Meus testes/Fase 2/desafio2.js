const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço:{
        rua: 'Rua Guilherme Gembala',
        Numero: 260
    }
}
console.log(`A empresa ${empresa.nome} esta localizada em ${empresa.endereço.rua}, ${empresa.endereço.Numero}`)
    
const programador = {
    nome: 'Joao',
    idade: 34,
    tecnologias: [
        {
             nome: 'C++', 
             especialidade: 'Desktop' 
        },
        { 
            nome: 'Python', 
            especialidade: 'Data Science'
        },
        { 
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile' 
        }
    ]
}
console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)