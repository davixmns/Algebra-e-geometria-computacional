class Vector {

    constructor(dim, elements) { //dim = dimensão do array | elements = elementos
        this.dim = dim
        this.elements = elements
    }

    criador() { //método que cria o vetor
        var v = []
        for (var i = 0; i < this.dim; i++) {
            v[i] = this.elements
        }
        return this.v = v;
    }

    get(i) { //método que pega o valor guardado no índice digitado
        if(i > this.dim){ //se indice digitado for maior que a dimensão do array
            return console.log("Parâmetro inválido")
        }else{
            return this.v[i]
        }
    }
    set(i, value) { //método que substitui no índice i o valor digitado
        if(i > this.dim){ //se o indice digitado for maior que a dimensão do array
            return console.log("Parâmetro inválido")
        } else {
            this.v[i] = value
        }
    }
}
//ÁREA DE EXECUÇÃO 
var vetor = new Vector(3, 0); //instanciação do objeto com parâmetros do método construtor
vetor.criador() //Criação do array
console.log("Antes: " + vetor.v) //exibindo array do objeto vetor do jeito que foi criado
vetor.set(2, 4) //colocando no indice 2 do array o valor 4
console.log("Depois: " + vetor.v) // exibindo como ficou
/* 
vetor = nome do objeto
criador, get e set = métodos
(3, elements) = parâmetros do método construtor
*/