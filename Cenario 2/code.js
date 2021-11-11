// Translate() OK Bruno
// Rotation() OK Alexia
// Reflection() OK Davi
// Projection() OK Vinicius 
// Shearing() OK Tarcizo 

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
    translate2D(vector, dx, dy) {
        // M*v == translatada 
        var objLA = new LinearAlgebra()
        var aux;
        // vetor com 3 posicoes
        var v = [
            [vector[0]],
            [vector[1]],
            [1]
        ]
        // matriz translatada
        var T = [
            [1, 0, dx],
            [0, 1, dy],
            [0, 0, 1]
        ]
        //retorna as coordenadas 
        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0]]
        return aux;
    }
    translate3D(vector, dx, dy,dz) {
        // M*v == translatada 
        var objLA = new LinearAlgebra()
        var aux2;
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var T = [
            [1, 0, 0, dx],
            [0, 1, 0, dy],
            [0, 0, 1, dz],
            [0, 0, 0, 1]
        ]
        aux2 = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux2;
    }

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

    rotation2D(vector, angle) {
        var angulo = angle;
        var objLA = new LinearAlgebra()
        var aux;
        var sin = Math.sin(angulo).toFixed(3);
        var cos = Math.cos(angulo).toFixed(3);
        var v = [
            [vector[0]],
            [vector[1]],
        ]
        var T = [

            [cos, -sin],
            [sin, cos]

        ]
        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0]]
        return aux;

    }

    rotation3Dx(vector, angle) {
        var angulo = angle;
        var objLA = new LinearAlgebra()
        var sin = Math.sin(angulo).toFixed(3);
        var cos = Math.cos(angulo).toFixed(3);
        var aux;
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var T = [
            [1, 0, 0, 0],
            [0, cos, -sin, 0, ],
            [0, sin, cos, 0],
            [0, 0, 0, 1]
        ];

        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux;
    }

    rotation3Dy(vector, angle) {
        var angulo = angle;
        var sin = Math.sin(angulo).toFixed(3);
        var cos = Math.cos(angulo).toFixed(3);
        var objLA = new LinearAlgebra()
        var aux;
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]

        var T = [
            [cos, 0, -sin, 0],
            [0, 1, 0, 0],
            [sin, 0, cos, 0],
            [0, 0, 0, 1]
        ]
        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux;
    }

    rotation3Dz(vector, angle) {
        var angulo = angle;
        var sin = Math.sin(angulo).toFixed(3);
        var cos = Math.cos(angulo).toFixed(3);
        var objLA = new LinearAlgebra()
        var aux;
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]

        var T = [
            [cos, -sin, 0, 0],
            [sin, cos, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]
        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux;
    }

    projection2Dx(vector) {
      var aux;
      var objLA = new LinearAlgebra()
        var v = [
            [vector[0]],
            [vector[1]],
            [1]
        ]
        var T = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 1]
        ]

        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux;
    }

    projection2Dy(vector) {
      var aux;
      var objLA = new LinearAlgebra()
        var v = [
            [vector[0]],
            [vector[1]],
            [1]
        ]
        var T = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]

        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux;
    }

    projection3Dxy(vector) {
      var aux;
      var objLA = new LinearAlgebra()
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var T = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1]
        ]

        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux;
    }

    projection3Dyz(vector) {
      var aux;
      var objLA = new LinearAlgebra()
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var T = [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]
        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
        return aux;
    }

    projection3Dxz(vector) {
      var aux;
      var objLA = new LinearAlgebra()
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var T = [
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]
        aux = [objLA.dot(T, v)[0][0], objLA.dot(T, v)[1][0], objLA.dot(T, v)[2][0]]
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

// EXEMPLOS DO MÉTODO SHEARING

// var vector = new Vector(2, [1, 2]);
// var transf = new Tranformations();
// var vetor = vector.criador()
// console.log(transf.shearing(vetor, 2, 0))



// EXEMPLOS DO MÉTODO REFLECTION
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

// EXEMPLOS DO MÉTODO TRANSLATE
/*
var vector2d = new Vector(2,[2, 4]);
var vector3d = new Vector(3, [4, 6, 9]);
var transf = new Tranformations();
var vector2d = vector2d.criador();
var vector3d = vector3d.criador();
//---------> EXEMPLO TRANSLATE 3D
console.log(transf.translate3D(vector3d, 2, 2 ,2));
//---------> EXEMPLO TRANSLATE 2D
console.log(transf.translate2D(vector2d,3 ,2))
*/

/* EXEMPLOS DO MÉTODO ROTATE

var vector2d = new Vector(2, [5, 6]);
var transf = new Tranformations();
var vetor = vector2d.criador()
console.log(transf.rotation2D(vetor, 200))

var vector3d = new Vector(3, [5, 6, 7]);
var transf = new Tranformations();
var vetor = vector3d.criador()
console.log(transf.rotation3Dx(vetor, 500))
console.log(transf.rotation3Dy(vetor, 500))
console.log(transf.rotation3Dz(vetor, 500))
*/

/* EXEMPLOS DO MÉTODO PROJECTION 

var vector2d = new Vector(2, [5, 6]);
var transf = new Tranformations();
var vetor = vector2d.criador()
console.log(transf.projection2Dx(vetor))
console.log(transf.projection2Dy(vetor))

var vector3d = new Vector(3, [5, 6, 7]);
var transf = new Tranformations();
var vetor = vector3d.criador()
console.log(transf.projection3Dxy(vetor))
console.log(transf.projection3Dyz(vetor))
console.log(transf.projection3Dxz(vetor))
*/





