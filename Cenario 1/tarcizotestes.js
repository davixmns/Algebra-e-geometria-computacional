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
class LinearAlgebra {
    constructor() {}

    sum(a, b) {}

    times(a, b) {}

    dot(a, b) {}

    gauss(a) {}

    solve(a) {}
}
var array = [
    [2, 3],
    [1, 5]
]
var matriz = new Matrix(2, 2, array);
var teste = matriz.criador();
matriz.set(0, 0, 5)
console.log(matriz)

//var valor = new Array(1, 2, 3, 4, 5);
//var indice = valor.indexOf(3);