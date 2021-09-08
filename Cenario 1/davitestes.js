class Vector {
    //dim = dimensão do Vetor
    //elements = elementos do veto
    //objeto da classe = vetor
    constructor(dim, elements) {
        this.dim = dim
        this.elements = elements
    }

    criador() {
        var v = []
        for (var i = 0; i < this.dim; i++) {
            v[i] = this.elements
        }
        return this.v = v;
    }

    get(i) {
        if(i > this.dim){
            return console.log("Parâmetro inválido")
        }else{
            return this.v[i]
        }
    }
    set(i, value) {
        if(i > this.dim){
            return console.log("Parâmetro inválido")
        } else {
            this.v[i] = value
        }
    }
}
var elementos = 3
var vetor = new Vector(3, elementos); //instanciação do objeto com parâmetros do método construtor
vetor.criador() //Criação do array
console.log("Antes: " + vetor.v) //exibindo array do objeto vetor do jeito que foi criado
vetor.set(2, 4) //colocando no indice 2 do array o valor 4
console.log("Depois: " + vetor.v) // exibindo como ficou
/* 
vetor = nome do objeto
criador, get e set = métodos
(3, elements) = parâmetros do método construtor
*/