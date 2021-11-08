class LinearAlgebra {

    times(a, b) {
        var resultado = [];
        for (var i = 0; i < a.length; i++) {
            resultado[i] = [];
            for (var j = 0; j < b[0].length; j++) {
                var sum = 0;
                for (var k = 0; k < a[0].length; k++) {
                    sum += a[i][k] * b[k][j];
                }
                resultado[i][j] = sum;
            }
        }
        return resultado;
    }

}
class Reflection {
    
    reflection2DX(matriz){
        var elements = [
            [-1, 0],
            [0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }

    reflection2DY(matriz){
        var elements = [
            [1, 0],
            [0, -1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }

    reflection3DX(matriz){
        var elements = [
            [-1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }
    reflection3DY(matriz){
        var elements = [
            [1, 0, 0],
            [0, -1, 0],
            [0, 0, 1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }
    reflection3DZ(matriz){
        var elements = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, -1]
        ]
        var objLA = new LinearAlgebra()
        return objLA.times(elements, matriz)
    }
}

class Tranformations {
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
/*
var vector = new Vector(2, [1, 2]);
var transf = new Tranformations();
var vetor = vector.criador()
console.log(transf.shearing(vetor, 0, 2))
*/

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
var objR = new Reflection()
console.log("2DX = " + objR.reflection2DX(elements1))
console.log("2DY = " + objR.reflection2DY(elements1))
console.log("3DX = " + objR.reflection3DX(elements2))
console.log("3DY = " + objR.reflection3DY(elements2))
console.log("3DZ = " + objR.reflection3DZ(elements2))
*/


// class Translate {}

// class Rotation {}

// class Reflection {} OK

// class Projection {}

// class Shearing {} OK 