class Vector {

    constructor(dim, elements) { //dim = dimensão do array | elements = elementos
        this.dim = dim
        this.elements = elements
    }

    criador() {
        if (this.elements.length == this.dim) {
            var v = []
            var j = 0;
            for (var i = 0; i < this.dim; i++) {
                v[i] = this.elements[j]
                j++
            }
            return this.v = v
        } else {
            console.log("Parâmetro inválido");
        }

    }

    get(i) { 
        if (i > this.dim) {
            return console.log("Parâmetro inválido")
        } else {
            return this.v[i]
        }
    }
    set(i, value) { 
        if (i > this.dim) { 
            return console.log("Parâmetro inválido")
        } else {
            this.v[i] = value
        }
    }
}

class Translate {}

class Rotation {}

class Reflection {}

class Projection {}

class Shearing {}
