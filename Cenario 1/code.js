//comit de teste

class Matrix {
    //rows = linhas, coluns = colunas, elements= elementos

    constructor(rows, cols, elements) {
        var m = [];
        for (var i = 0; i < rows; i++) {
            m[i] = [];

            for (var j = 0; j < cols; j++) {
                m[i][j] = elements[i][j];
            }
        }
        this.m = m;
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
        var v = []
        for (i = 0; i < dim; i++) {
            v[i] = elements
        }
        console.log(v)
    }
    get(i) {
        console.log(v[i])
    }
    set(i, value) {
        v[i] = value
    }
}