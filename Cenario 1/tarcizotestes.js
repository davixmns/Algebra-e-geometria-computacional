class Matrix {
    //rows = linhas, coluns = colunas, elements= elementos

    constructor(rows, cols, elements) {
        this.rows = rows;
        this.cols = cols
        this.elements = elements
        this.matriz = 0;
    }



    criador() {
        if (this.elements.length == this.rows && this.elements[0].length == this.cols) {
            var m = [];
            for (var i = 0; i < this.rows; i++) {
                m[i] = [];

                for (var j = 0; j < this.cols; j++) {
                    m[i][j] = this.elements[i][j];
                }
            }
            return this.m = m;
        } else console.log('Array nao suportado')

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
        if (Array.isArray(a) == true && Array.isArray(b) == true) {

            var linhas = a.length,
                colunas = a[0].length,
                linahsb = b.length,
                colunasb = b[0].length;

            if (linhas == linahsb && colunas == colunasb) {
                var aux = [];
                if (colunas > 0) {

                    for (var i = 0; i < linhas; i++) {
                        aux[i] = [];
                        for (var x = 0; x < colunas; x++) {
                            aux[i][x] = a[i][x] + b[i][x]
                        }
                    }

                    return aux;
                } else if (colunas == undefined) {
                    for (var y = 0; y < linhas; y++) {
                        aux[y] = a[y] + b[y]
                    }

                    return aux;
                }
            } else console.log("Operação impossível")
        } else console.log("Parametro invalido")
    }

    times(a, b) {}

    dot(a, b) {
        var linhas = a.length,
            colunas = a[0].length,
            linahsb = b.length,
            colunasb = b[0].length;

        var m = [];
        for (var x = 0; x < linhas; x++) {
            m[x] = [];
            for (var y = 0; y < colunasb; y++) {
                m[x][y] = 0;
            }
        }
        for (var i = 0; i < linhas; i++) {
            for (var j = 0; j < colunasb; j++) {
                for (var k = 0; k < colunas; k++) {
                    m[i][j] = m[i][j] + a[i][k] * b[k][j];
                }
            }
        }

        return m;

    }

    gauss(a) {}

    solve(a) {}
}

var array = [
    [1, 2],
    [3, 4]
]

var array2 = [
    [1, 2],
    [3, 4]
]
var matriz1 = new Matrix(2, 2, array);
var matriz2 = new Matrix(2, 2, array2);
matriz1 = matriz1.criador();
matriz2 = matriz2.criador();
var op = new LinearAlgebra(matriz1, matriz2);
console.log(op.dot(matriz1, matriz2))