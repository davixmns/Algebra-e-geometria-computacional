class LinearAlgebra {
    constructor(objeto1, objeto2) {
        this.objeto1 = objeto1;
        this.objeto2 = objeto2;
    }
    // objeto1: objeto de Matrix ou Vector
    // objeto2: objeto de Matrix ou Vector

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
class Reflection {

    reflection2DX(matriz) {
        var elements = [
            [-1, 0],
            [0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.dot(elements, matriz)
    }

    reflection2DY(matriz) {
        var elements = [
            [1, 0],
            [0, -1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.dot(elements, matriz)
    }

    reflection3DX(matriz) {
        var elements = [
            [-1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.dot(elements, matriz)
    }
    reflection3DY(matriz) {
        var elements = [
            [1, 0, 0],
            [0, -1, 0],
            [0, 0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.dot(elements, matriz)
    }
    reflection3DZ(matriz) {
        var elements = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, -1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.dot(elements, matriz)
    }
}

var elements1 = [
    [10],
    [10]
]
var elements2 = [
    [10],
    [10],
    [10]
]
var objR = new Reflection()
console.log("2DX = " + objR.reflection2DX(elements1))
console.log("2DY = " + objR.reflection2DY(elements1))
console.log("3DX = " + objR.reflection3DX(elements2))
console.log("3DY = " + objR.reflection3DY(elements2))
console.log("3DZ = " + objR.reflection3DZ(elements2))