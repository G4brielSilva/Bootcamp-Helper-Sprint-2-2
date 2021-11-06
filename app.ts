/* a) Crie uma classe que retorne a bio do id passado
 b) Crie uma classe que retorne o name do id passado
 c) Crie uma classe que apague um item da lista a partir de um id passado
 d) Crie uma classe que altere a bio ou o name a partir de um id passado
 e) Demonstre todos os métodos com o paradigma funcional e com o imperativo
 Atenção: A escolha de fazer 1 classe ou N classes é de cada pessoa*/

class Person{
    public id: number;
    public name: string;
    public bio: string;

    constructor(i: number, nm: string, b: string){
        this.id=i;
        this.name=nm;
        this.bio=b;
    }
}

let lista: Person[] = [
    new Person(1, "Ada Lovelace", "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"),
    new Person(2, "Alan Turing", "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"),
    new Person(3, "Nikola Tesla", "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."),
    new Person(4, "Nicolau Copérnico", "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.")];