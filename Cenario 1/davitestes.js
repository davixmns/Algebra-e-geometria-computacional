
class Vector {

    constructor(dim, elements) { //dim = dimensão do array | elements = elementos
        this.dim = dim
        this.elements = elements
    }

    criador() { //método que cria o vetor
        if (this.elements.length == this.dim) {
            var v = []
            var j = 0;
            for (var i = 0; i < this.dim; i++) {
                v[i] = this.elements[j]
                j++
            }
            return this.v = v
        }
        else {
            console.log("Parâmetro inválido");
        }

    }

    get(i) { //método que pega o valor guardado no índice digitado
        if (i > this.dim) { //se indice digitado for maior que a dimensão do array
            return console.log("Parâmetro inválido")
        } else {
            return this.v[i]
        }
    }
    set(i, value) { //método que substitui no índice i o valor digitado
        if (i > this.dim) { //se o indice digitado for maior que a dimensão do array
            return console.log("Parâmetro inválido")
        } else {
            this.v[i] = value
        }
    }
}

var elem = [1, 2, 3];
var dim = 3
var objVector = new Vector(dim, elem);
objVector.criador()
var objLA = new LinearAlgebra(objVector.v, 0);
console.log(objLA.transpose(objVector.v));


