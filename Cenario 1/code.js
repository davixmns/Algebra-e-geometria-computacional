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
        return this.m[i][j];
    }

    set(i, j, value) {
        this.m[i][j] = value;
    }

}
class Vector {
    //dim = dimensão do Vetor
    //elements = elementos do veto
    constructor(dim, elements) {
        var v = new Array(dim);

        for (i = 0; i < v.length; i++) {
            v[i] = elements
        }
        console.log(v)
    }
    get(i) {
        return this.v[i]
    }
    set(i, value) {
        v[i] = value
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