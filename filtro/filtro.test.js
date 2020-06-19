const filtro = require ('./filtro')
const contatos = [{"nome":"Ramon", "sobrenome":"Lima"},{"nome":"Edineusa", "sobrenome":"Santana"}]
const encontrado =  {"nome":"Ramon", "sobrenome":"Lima"}

describe ('Filtro',()=>{
	test('Pesquisar nome existente na base',()=>{
		expect(filtro(contatos,"Ramon")).toEqual(encontrado)
	})
	test('Pesquisar nome inexistente na base',()=>{
		expect(filtro(contatos,"Paulo")).toBeUndefined()
	});

});