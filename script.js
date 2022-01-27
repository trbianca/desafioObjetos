// // Crie um objeto que receba ao menos três propriedades sobre você.
// let pessoa = {
//     nome: "Bianca",
//     tatuagens: 7,
//     piercing: 1,
//     lugarFav: "Cinema"
// }

// // Adicione uma nova propriedade sem alterar seu objeto inicial.
// pessoa.comidaFav = "Bobó de camarão"

// // Remova uma propriedade desse objeto.
// delete pessoa.piercing

// //Mostre no console todas as propriedades desse objeto.
// console.log(pessoa)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.

let cadastro = [{
    nome: "Bianca",
    idade: 21,
    telefone: 5555-5555,
    amigos: ["Caio", "Rebeca", "Sara", "Tereza"]
},
{
    nome: "Caio",
    idade: 20,
    telefone: 6666-666,
    amigos: ["Bianca", "Andrew", "Guerini", "Lucas"]
},
{
    nome: "Rebeca",
    idade: 22,
    telefone: 7777-7777,
    amigos: ["Bianca", "Tata", "Fábio", "Sandra"]
},
{
    nome: "Tereza",
    idade: 27,
    telefone: 8888-8888,
    amigos: ["Izabela", "Lobo", "Nicolas", "Gabriel"]
},
{
    nome: "Sandra",
    idade: 50,
    telefone: 9999-9999,
    amigos: ["Margo", "Lever", "Phoebe", "Kevin"]
}]

console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[2])
console.log(cadastro[4].amigos[1])