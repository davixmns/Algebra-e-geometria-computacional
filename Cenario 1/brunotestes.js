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

    times(a, b) {}

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

    gaussSolver(A, b) {
        var i, j, k, l, m;
        //ETAPA DE ESCALONAMENTO
        for (k = 0; k < A.length - 1; k++) {
            //procura o maior k-ésimo coeficiente em módulo
            var max = Math.abs(A[k][k]);
            var maxIndex = k;
            for (i = k + 1; i < A.length; i++) {
                if (max < Math.abs(A[i][k])) {
                    max = Math.abs(A[i][k]);
                    maxIndex = i;
                }
            }
            if (maxIndex != k) {
                /*
                 troca a equação k pela equação com o
                 maior k-ésimo coeficiente em módulo
                 */
                for (j = 0; j < A.length; j++) {
                    var temp = A[k][j];
                    A[k][j] = A[maxIndex][j];
                    A[maxIndex][j] = temp;
                }
                var temp = b[k];
                b[k] = b[maxIndex];
                b[maxIndex] = temp;
            }
            //Se A[k][k] é zero, então a matriz dos coeficiente é singular
            //det A = 0
            if (A[k][k] == 0) {
                return null;
            } else {
                //realiza o escalonamento
                for (m = k + 1; m < A.length; m++) {
                    var F = -A[m][k] / A[k][k];
                    A[m][k] = 0; //evita uma iteração
                    b[m] = b[m] + F * b[k];
                    for (l = k + 1; l < A.length; l++) {
                        A[m][l] = A[m][l] + F * A[k][l];
                    }
                }
            }
        }
        //ETAPA DE RESOLUÇÃO DO SISTEMA
        var X = [];
        for (i = A.length - 1; i >= 0; i--) {
            X[i] = b[i];
            for (j = i + 1; j < A.length; j++) {
                X[i] = X[i] - X[j] * A[i][j];
            }
            X[i] = X[i] / A[i][i];
        }
        return X;
    }

    solve(a) {}
}

//EXEMPLOS--------------------------------------------------------

/*Exeplo para a classe Matrix e Somatoria*/
var array1 = [
    [1, 2],
    [3, 4]
]

var array2 = [
    [1, 2],
    [3, 4]
]
var m1 = new Matrix(2, 2, array1)
var m2 = new Matrix(2, 2, array2)

/*Criar matriz*/

matriz1 = m1.criador();
matriz2 = m2.criador();

/*Get e set*/


// console.log(m1.get(2, 1))
// m1.set(1, 1, 5)
// console.log(m1.mostrar())


/*Somatoria */
var operacao = new LinearAlgebra();
console.log(operacao.sum(matriz1, matriz2))

/*Multiplicação*/
console.log(operacao.dot(matriz1, matriz2))





//Exemplo pra Vector
/*
var elem = [1, 2, 3]
var dim = 3
var objVector = new Vector(dim, elem);
console.log("vetor criado: " + objVector.criador())
console.log("Get: " + objVector.get(0))
objVector.set(0, 10)
console.log("Set: " + objVector.get(0))
*/


//Vetor Transposto
/*
var objLA = new LinearAlgebra(objVector.v, 0);
console.log("Vetor transposto: " + objLA.transpose(objVector.v));
*/