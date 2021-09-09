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
    constructor(objeto1, objeto2) {

        this.objeto1 = objeto1;
        this.objeto2 = objeto2;
    }
    // objeto1: objeto de Matrix ou Vector
    // objeto2: objeto de Matrix ou Vector

    transpose(objeto1) {
        var o = this.objeto1;
        var t = [];
        t = reverse(o);
        return this.t;
    }

    sum(a, b) {
        var aux = [];
        for (var i = 0; i < a.rows; i++) {
            aux[i] = [];
            for (var x = 0; x < b.cols; x++) {
                aux[i][x] = a[i][x] + b[i][x];
            }
        }
        return aux;
    }

    times(a, b) {}

    dot(a, b) {}

    gauss(a) {}

    solve(a) {}
}

var array = [
    [2, 3],
    [1, 5]
]
var matriz1 = new Matrix(2, 2, array);
var matriz2 = new Matrix(2, 2, array)
var op = new LinearAlgebra(1, 2)



console.log(op.sum(matriz1, matriz2))

//var valor = new Array(1, 2, 3, 4, 5);
//var indice = valor.indexOf(3);