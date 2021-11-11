"use strict";
/* a) Crie uma classe que retorne a bio do id passado
 b) Crie uma classe que retorne o name do id passado
 c) Crie uma classe que apague um item da lista a partir de um id passado
 d) Crie uma classe que altere a bio ou o name a partir de um id passado
 e) Demonstre todos os métodos com o paradigma funcional e com o imperativo
 Atenção: A escolha de fazer 1 classe ou N classes é de cada pessoa*/
class Person {
    constructor(list) {
        this.data = list;
    }
    getBioById(id) {
        for (const value of this.data) {
            if (value.id === id)
                return value.bio;
        }
        return "Id Inválido";
    }
    getNameById(id) {
        for (const value of this.data) {
            if (value.id === id)
                return value.name;
        }
        return "Id Inválido";
    }
    deleteElementById(id) {
        this.data.forEach((value) => {
            if (value.id === id)
                this.data.splice(this.data.indexOf(value), 1);
        });
    }
    changeElementById(id, change, newString) {
        change = change.toLowerCase();
        this.data.forEach((value) => {
            if (value.id === id) {
                if (change === "bio")
                    value.bio = newString;
                else if (change === "name")
                    value.name = newString;
                else
                    console.log(`Opção de mudança ${change} inválida`);
            }
        });
    }
    getBioByIdF(id) {
        var _a;
        return (_a = this.data.find((value) => value.id === id)) === null || _a === void 0 ? void 0 : _a.bio;
    }
    getNameByIdF(id) {
        var _a;
        return (_a = this.data.find((value) => value.id === id)) === null || _a === void 0 ? void 0 : _a.name;
    }
    deleteElementByIdF(id) {
        return this.data.filter((value) => value.id !== id);
    }
    changeNameByIdF(id, newString) {
        return this.data.map((value) => { if (value.id === id)
            value.name = newString; });
    }
    changeBioByIdF(id, newString) {
        this.data.map((value) => { if (value.id === id)
            value.bio = newString; });
    }
    changeElementByIdF(id, change, newString) {
        if (change.toLowerCase() === "bio")
            return this.changeBioByIdF(id, newString);
        else if (change.toLowerCase() === "name")
            return this.changeNameByIdF(id, newString);
    }
}
const lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial." },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
let p1 = new Person(lista);
//Exemplos Imperativos 
console.log(p1.getBioById(1));
console.log(p1.data[0]);
console.log(p1.getNameById(1));
console.log(p1.data[0]);
p1.changeElementById(1, "Name", "Fernando");
console.log(p1.data[0]);
p1.changeElementById(1, "BIO", "O melhor padeiro da zona sul do rio");
console.log(p1.data[0]);
p1.deleteElementById(1);
console.log(p1.data[0]);
//Exemplos Funcionais
console.log(p1.getBioByIdF(1));
console.log(p1.data[0]);
console.log(p1.getNameByIdF(1));
console.log(p1.data[0]);
p1.changeElementByIdF(2, "Name", "Fernando");
console.log(p1.data[0]);
p1.changeElementByIdF(2, "BIO", "O melhor padeiro da zona sul do rio");
console.log(p1.data[0]);
console.log(p1.deleteElementByIdF(2));
