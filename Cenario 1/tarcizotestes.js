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
        if (a.length > 0) {
            var linhas = a.length;
            var colunas = a[0].length;
        }
        var aux = [];
        if (colunas > 0) {

            for (var i = 0; i < linhas; i++) {
                aux[i] = [];
                for (var x = 0; x < colunas; x++) {
                    aux[i][x] = a[i][x] + b[i][x]
                }
            }

            return aux;
        } else if (colunas < 1) {
            for (y = 0; y < linhas; i++) {
                aux[y] = a[y] + b[y]
            }

            return aux;
        }
    }

    times(a, b) {}

    dot(a, b) {}

    gauss(a) {}

    solve(a) {}
}

var array = [
    [3, 5],
    [7, 5]
]
var matriz1 = new Matrix(2, 2, array);
var matriz2 = new Matrix(2, 2, array);
matriz1 = matriz1.criador();
matriz2 = matriz2.criador();
var vertor = [1, 2, 3]
var op = new LinearAlgebra(1, 2)

//console.log(op.sum(matriz1, matriz2))
//console.log(typeof (vertor[0].length) == undefined)
console.log(Array.isArray(matriz1))

//var valor = new Array(1, 2, 3, 4, 5);
//var indice = valor.indexOf(3);