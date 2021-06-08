// const usuarios = [
//     {
//         nome: "Carlos", 
//         tecnologias: ["HTML", "CSS"] },
//     {
//         nome: "Jasmine",
//         tecnologias: ["JavaScript", "CSS"] },
//     { 
//         nome: "Tuane", 
//         tecnologias: ["HTML", "Node.js"] }
//   ];

// function listar(usu){
//     for(let i = 0; i < usu.length; i++)
//     console.log(`${usu[i].nome} trabalha com ${usu[i].tecnologias}`)

// }

//listar(usuarios)

// function checaSeUsuarioUsaCSS(usua) {
//     for(let i = 0; i < usua.length; i++) {    
//         if (usua[i].tecnologias[0] == "CSS" || usua[i].tecnologias[1] == "CSS"){   
//             console.log(`O usuário ${usua[i].nome} trabalha com CSS`);
//         }
//     }
//   }
//checaSeUsuarioUsaCSS(usuarios)


  const usuariosA = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];
     function calculaSaldo(rec, des) { 
            const Sreceitas = somaNumeros(rec)
            const Sdespesas = somaNumeros(des)

            return Sreceitas - Sdespesas
  }

function somaNumeros(num) {
  let soma = 0
    for(let numero of num){
      soma = soma + numero
    }
   return soma
  }

  for (let usuario of usuariosA) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`)
    }
}
