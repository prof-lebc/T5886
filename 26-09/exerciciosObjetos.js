/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //{canal: "Globo", horario: "14h"} 
*/



/*
const cachorro = {
	nome: "Bituca", 
	idade: 4, 
	raca: "Vira Lata"
}

const gato = {...cachorro, nome: "Pablo Emilio Escobar Gaviria"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/



function minhaModalidade(objeto, modalidade) {
	return objeto[modalidade]
}

const pessoa1 = {
  nome: "Datena", 
  idade: 67, 
  modalidade: "WWE" }

const pessoa2 = {
    nome: 'Sub Zero',
    idade: 32,
    modalidade: 'Mortal Kombatman' }

console.log(minhaModalidade(pessoa1, "modalidade"))
console.log(minhaModalidade(pessoa2, "modalidade"))
