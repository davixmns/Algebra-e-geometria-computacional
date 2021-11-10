// class Translate {} OK Bruno
// class Rotation {} Alexia
// class Reflection {} OK Davi
// class Projection {} Vinicius 
// class Shearing {} OK Tarcizo 

class LinearAlgebra {
    //operaçoes
    dot(a, b) {

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


    }

}
class Vector {

    constructor(dim, elements) { //dim = dimensão do array | elements = elementos
        this.dim = dim
        this.elements = elements
    }

    criador() {
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

    get(i) {
        if (i > this.dim) {
            return console.log("Parâmetro inválido")
        } else {
            return this.v[i]
        }
    }
    set(i, value) {
        if (i > this.dim) {
            return console.log("Parâmetro inválido")
        } else {
            this.v[i] = value
        }
    }
}

class Tranformations {

    reflection2DX(matriz) {
        var elements = [
            [-1, 0],
            [0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }

    reflection2DY(matriz) {
        var elements = [
            [1, 0],
            [0, -1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }

    reflection3DX(matriz) {
        var elements = [
            [-1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }
    reflection3DY(matriz) {
        var elements = [
            [1, 0, 0],
            [0, -1, 0],
            [0, 0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }
    reflection3DZ(matriz) {
        var elements = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, -1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }

    translate2D(vector, dx, dy) {
        // M*v == translatada 
        var objLA = new LinearAlgebra()
        var aux;
        var v = [
            [vector[0]],
            [vector[1]],
            [1]
        ]
        var T = [
            [1, 0, dx],
            [0, 1, dy],
            [0, 0, 1]
        ]
        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0]]
        return aux;
    }

    shearing(vector, ky, kx) {
        // T*vector 
        var v = [
            [vector[0]],
            [vector[1]]
        ]
        var cisy = [
            [1, 0],
            [1, ky]
        ];
        var cisx = [
            [1, kx],
            [0, 1]
        ];
        var objLA = new LinearAlgebra()
        var aux;

        if (ky > 0) {

            aux = [objLA.times(cisy, v)[0][0], objLA.times(cisy, v)[1][0]]
            return aux;

        } else if (kx > 0) {

            aux = [objLA.times(cisx, v)[0][0], objLA.times(cisx, v)[1][0]]
            return aux;

        } else {
            return vector
        }

    }
}

// EXEMPLOS DA CLASSE CISALHAMENTO

// var vector = new Vector(2, [1, 2]);
// var transf = new Tranformations();
// var vetor = vector.criador()
// console.log(transf.shearing(vetor, 2, 0))



// EXEMPLOS DA CLASSE TRANSLATE

// ----- > Translate 2D
// var vector = new Vector(2, [3, 4]);
// var transf = new Tranformations();
// var vetor = vector.criador()
// console.log(transf.translate2D(vetor, 2, 2))





// EXEMPLOS DA CLASSE REFLECTION
/*
var elements1 = [
    [10],
    [10]
]
var elements2 = [
    [10],
    [10],
    [10]
]
var transf = new Tranformations()
console.log("2DX = " + transf.reflection2DX(elements1))
console.log("2DY = " + transf.reflection2DY(elements1))
console.log("3DX = " + transf.reflection3DX(elements2))
console.log("3DY = " + transf.reflection3DY(elements2))
console.log("3DZ = " + transf.reflection3DZ(elements2))
*/