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

        console.log(m)
    }

    get(i, j) {}

    set(i, j, value) {}


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


var array = [
    [2, 2, 3],
    [1, 2, 3]
]
const matriz = new Matrix(2, 3, array);
matriz.constructor
//commit teste