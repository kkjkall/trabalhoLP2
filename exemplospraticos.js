//Exemplo de Classe:

class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  }


//Exemplo de Objeto:

var meuCachorro = new Object();
meuCachorro.idade = "6 meses";
meuCachorro.raça = "Pastor Alemão";
meuCachorro.nome = "Thor"


//Exemplo de Atributo:

setAttribute(date, value)


//Exemplo de método:

const usuario = {
    nome: "Kallel",
    saudar: function() {
        console.log("Eai, eu me chamo " + this.nome +".");
    }
};

usuario.saudar(); // "Eai, eu me chamo Kallél."


//Exemplo de Herança

function Pessoa(nome, sobrenome, idade, genero, curso) {
    this.name = {
      nome,
      sobrenome,
    };
    this.idade = idade;
    this.genero = genero;
    this.curso = curso;
  }

  Person.prototype.greeting = function () {
    alert("Ola! Eu sou o " + this.name.first + ".");
  };


//Exemplo de Plomorfismo

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    falar() {
      console.log(`Opa, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  const pessoa1 = new Pessoa("Kleber", 18);
  pessoa1.falar(); // Output: "Olá, meu nome é Kleber e tenho 18 anos."