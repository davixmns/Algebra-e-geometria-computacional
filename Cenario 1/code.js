//comit de teste

class Matrix {
    //rows = linhas, coluns = colunas, elements= elementos

    constructor(rows, cols, elements) {
        this.rows = rows;
        this.cols = cols
        this.elements = elements
        this.matriz = 0;
    }

    criador() {
        var m = [];
        for (var i = 0; i < this.rows; i++) {
            m[i] = [];

            for (var j = 0; j < this.cols; j++) {
                m[i][j] = this.elements[i][j];
            }
        }
        return this.m = m;
    }
    get(i, j) {
        if (i > this.rows || j > this.cols) {
            return console.log("Parametro invalido")
        } else {
            return this.m[i][j];
        }

    }

    set(i, j, value) {
        if (i > this.rows || j > this.cols) {
            return console.log("Parametro invalido")
        } else {
            return this.m[i][j] = value;
        }
    }

}
class Vector {
    //dim = dimensão do Vetor
    //elements = elementos do Vetor
    constructor(dim, elements) {
        var v = []
        elements = parseInt(lines.shift());
        for (i = 0; i < dim; i++) {
            v[i] = elements
        }
    }
    get(i){
        this.v[i]
    }
    set(i, value){
        this.v[i] = value
    }
}

class LinearAlgebra {
    constructor() {}

    sum(a, b) {}

    times(a, b) {}

    dot(a, b) {}

    gauss(a) {}

    solve(a) {}
}