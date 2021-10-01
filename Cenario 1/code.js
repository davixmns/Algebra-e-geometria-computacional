class Matrix {
    //rows = linhas, coluns = colunas, elements= elementos

    constructor(rows, cols, elements) {
        this.rows = rows;
        this.cols = cols
        this.elements = elements
        this.m = 0

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
            return this.m[i - 1][j - 1];
        }

    }

    set(i, j, value) {
        if (i > this.rows || j > this.cols) {
            return console.log("Parametro invalido")
        } else {
            return this.m[i][j] = value;
        }
    }

    mostrar() {
        return this.m
    }

}

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
        } else {
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

class LinearAlgebra {
    constructor(objeto1, objeto2) {
        this.objeto1 = objeto1;
        this.objeto2 = objeto2;
    }
    // objeto1: objeto de Matrix ou Vector
    // objeto2: objeto de Matrix ou Vector

    transpose(a) {

        var linhas = a.length;
        var colunas = a[0].length;

        if (Array.isArray(a) == true && colunas != undefined) {
            var newArray = [];
            for (var i = 0; i < a.length; i++) {
                newArray.push([]);
            };

            for (var i = 0; i < a.length; i++) {
                for (var j = 0; j < a.length; j++) {
                    newArray[j].push(a[i][j]);
                };
            };
            return newArray;
        } else if (Array.isArray(a) == true && colunas == undefined) {
            var resul = [];
            resul = a.reverse();
            return resul;
        } else console.log("operação impossivel")
    }

    sum(a, b) {
        if (Array.isArray(a) == true && Array.isArray(b) == true) {

            var linhas = a.length;
            var colunas = a[0].length;
            var linahsb = b.length;
            var colunasb = b[0].length;

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

    times(a, b) {
        var timesM = [];

        if (Array.isArray(a) == false) {
            for (var i = 0; i < b.length; i++) {
                timesM[i] = [];
                for (var j = 0; j < b[0].length; j++) {
                    timesM[i][j] = b[i][j] * a;
                }
            }
            return timesM;
        } else if (a[0].length == undefined) {
            for (var y = 0; y < a.length; y++) {
                timesM[y] = a[y] * b[y]
            }

            return timesM;
        } else {

            for (var i = 0; i < b.length; i++) {
                timesM[i] = [];
                for (var j = 0; j < b[0].length; j++) {
                    timesM[i][j] = b[i][j] * a[i][j];
                }
            }
            return timesM;
        }

    }

    dot(a, b) {


        if (Array.isArray(a) == true && Array.isArray(b) == true && a[0].length != undefined && b[0].length != undefined) {
            var linhas = a.length,
                colunas = a[0].length,
                linahsb = b.length,
                colunasb = b[0].length;
            if (colunas == linahsb) {
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
            } else {
                return " Operação impossivel "
            }

        } else {
            return "Aceito apenas matrizes"
        }

    }

    gauss(a) {
        var aux;
        var i, j, k, c;
        var gaussM = a.elements;

        for (i = 0; i < a.rows - 1; i++) {
            for (j = i + 1; j < a.rows; j++) {
                if (gaussM[i][i] == 0) {
                    for (k = i; k < a.cols; k++) {
                        aux = gaussM[i][k];
                        gaussM[i][k] = gaussM[i + 1][k];
                        gaussM[i + 1][k] = aux;
                    }
                }

                if (gaussM[j][i] == 0) {
                    k = gaussM[j][i] / gaussM[i][i];
                    for (c = i; c < a.cols; c++) {
                        gaussM[j][c] = gaussM[j][c] - k * gaussM[i][c];
                    }
                }
            }
        }
        return gaussM;
    }

    solve(a) {
        var res = [];
        var i, j, k, c;

        var cal = new LinearAlgebra()
        var soveMatriz = cal.gauss(a)

        for (i = a.rows - 1; i > 0; i--) {
            for (j = i - 1; j >= 0; j--) {
                k = soveMatriz[j][i] / soveMatriz[i][i];
                for (c = i; c < a.cols; c++) {
                    soveMatriz[j][c] = soveMatriz[j][c] - k * soveMatriz[i][c];
                }
            }
        }

        for (i = 0; i < a.rows; i++) {
            soveMatriz[i][a.cols - 1] = soveMatriz[i][a.cols - 1] / soveMatriz[i][i];
            soveMatriz[i][i] = 1;

            res[i] = soveMatriz[i][a.cols - 1]
        }
        return res;
    }
}

//EXEMPLOS--------------------------------------------------------
/*
var matriz1 = [
    [1, 2],
    [3, 4]
]

var matriz2 = [
    [1, 2],
    [3, 4]
]
*/

//Matrix----------------------------------------------------------

//var m1 = new Matrix(2, 2, matriz1)
//var m2 = new Matrix(2, 2, matriz2)
//matriz1 = m1.criador()
//matriz2 = m2.criador()
//console.log(m1.get(2, 1))
// m1.set(1, 1, 5)
//console.log(m1.mostrar())

//Vector-----------------------------------------------------------

//var elem = [1, 2, 3, 4]
//var dim = 4
//var objVector = new Vector(dim, elem)
//console.log("vetor criado: " + objVector.criador())
//console.log("Get: " + objVector.get(0))
//objVector.set(0, 10)
//console.log("Get: " + objVector.get(0))

//LinearÁlgebra----------------------------------------------------

//sum
//var operacao = new LinearAlgebra()
//console.log(operacao.sum(matriz1, matriz2))

//dot
//console.log(operacao.dot(matriz1, matriz2))

//transpose
//console.log("Vetor transposto: " + operacao.transpose(objVector.v))

//times
//console.log(operacao.times(matriz1, matriz2));

//gauss
//console.log(operacao.gauss(matriz1));

//solve
//console.log(operacao.solve(matriz1));