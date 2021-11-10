// class Translate {} OK
// class Rotation {}
// class Reflection {} OK
// class Projection {}
// class Shearing {} OK 

class LinearAlgebra {

    times(a, b) {
        var resultado = [];
        for (var i = 0; i < a.length; i++) {
            resultado[i] = [];
            for (var j = 0; j < b[0].length; j++) {
                var soma = 0;
                for (var k = 0; k < a[0].length; k++) {
                    soma += a[i][k] * b[k][j];
                }
                resultado[i][j] = soma;
            }
        }
        return resultado;
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

}


class Vector {

    constructor(dim, elements) { //dim = dimensão do array | elements = elementos
      this.dim = dim
      this.elements = elements
    }
}

class Matrix {
    //rows = linhas, coluns = colunas, elements= elementos

    constructor(rows, cols, elements) {
        this.rows = rows;
        this.cols = cols
        this.elements = elements
        this.m = 0

    }
}

class Tranformations {

      basicOperations(vector, canonicaMatrix) {
        let c = vector;

        let value = [];

        for(let i = 0; i < c.size; i++) {
            value.push(c.values[i]);
        }
        value.push(c.values[1]);

        let d = new Vector(c.size+1, value);
        let linAlg = new LinearAlgebra;
        d = linAlg.dot(canonicaMatrix, d);
        d.values.pop();
        return d;
    }

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

      rotation2D(vector, angle) {
      let degrees = angle;
      let sin = Math.sin(degrees).toFixed(3);
      let cos = Math.cos(degrees).toFixed(3);

      let canonicaMatrix = new Matrix(3,3,[cos,-sin,0,sin,cos,0,0,0,1]);
      
      return this.basicOperations(vector, canonicaMatrix);
    }

    rotation3Dx(vector, angle) {
        let degrees = angle;
        let sin = Math.sin(degrees).toFixed(3);
        let cos = Math.cos(degrees).toFixed(3);

        let canonicaMatrix = new Matrix(4,4,[1,0,0,0,0,cos,-sin,0,0,sin,cos,0,0,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    rotation3Dy(vector, angle) {       
        let degrees = angle;
        let sin = Math.sin(degrees).toFixed(3);
        let cos = Math.cos(degrees).toFixed(3);

        let canonicaMatrix = new Matrix(4,4,[cos,0,-sin,0,0,1,0,0,sin,0,cos,0,0,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    rotation3Dz(vector, angle) {
        let degrees = angle;
        let sin = Math.sin(degrees).toFixed(3);
        let cos = Math.cos(degrees).toFixed(3);

        let canonicaMatrix = new Matrix(4,4,[cos,-sin,0,0,sin,cos,0,0,0,0,1,0,0,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
    }

     projection2Dx(vector){
        let canonicaMatrix = new Matrix(3,3,[1,0,0,0,0,0,0,0,1]);

        return this.basicOperations(vector, canonicaMatrix);
    }

    projection2Dy(vector){
        let canonicaMatrix = new Matrix(3,3,[0,0,0,0,1,0,0,0,1]);

        return this.basicOperations(vector, canonicaMatrix);
    }

    projection3Dxy(vector){
        let canonicaMatrix = new Matrix(4,4,[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    projection3Dyz(vector){
        let canonicaMatrix = new Matrix(4,4,[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    projection3Dxz(vector){
        let canonicaMatrix = new Matrix(4,4,[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
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

var transf = new Tranformations()
console.log("2DX = " + transf.reflection2DX(elements1))
console.log("2DY = " + transf.reflection2DY(elements1))
console.log("3DX = " + transf.reflection3DX(elements2))
console.log("3DY = " + transf.reflection3DY(elements2))
console.log("3DZ = " + transf.reflection3DZ(elements2))
*/
