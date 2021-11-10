// class Translate {} OK
// class Rotation {}
// class Reflection {} OK
// class Projection {}
// class Shearing {} OK 

class LinearAlgebra {

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
        var sin = Math.sin(angulo).toFixed(3);
        var cos = Math.cos(angulo).toFixed(3);
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var canonicaMatrix = new Matrix(4, 4, [
            [1, 0, 0, 0],
            [0, cos, -sin, 0, ],
            [0, sin, cos, 0],
            [0, 0, 0, 1]
        ]);

        return this.basicOperations(vector, canonicaMatrix);
    }

    rotation3Dy(vector, angle) {
        var angulo = angle;
        var sin = Math.sin(angulo).toFixed(3);
        var cos = Math.cos(angulo).toFixed(3);
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]

        var canonicaMatrix = new Matrix(4, 4, [
            [cos, 0, -sin, 0],
            [0, 1, 0, 0],
            [sin, 0, cos, 0],
            [0, 0, 0, 1]
        ]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    rotation3Dz(vector, angle) {
        var angulo = angle;
        var sin = Math.sin(angulo).toFixed(3);
        var cos = Math.cos(angulo).toFixed(3);
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]

        var canonicaMatrix = new Matrix(4, 4, [
            [cos, -sin, 0, 0],
            [sin, cos, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    projection2Dx(vector) {
        var v = [
            [vector[0]],
            [vector[1]],
            [1]
        ]
        var canonicaMatrix = new Matrix(3, 3, [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 1]
        ]);

        return this.basicOperations(vector, canonicaMatrix);
    }

    projection2Dy(vector) {
        var v = [
            [vector[0]],
            [vector[1]],
            [1]
        ]
        var canonicaMatrix = new Matrix(3, 3, [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]);

        return this.basicOperations(vector, canonicaMatrix);
    }

    projection3Dxy(vector) {
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var canonicaMatrix = new Matrix(4, 4, [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 1]
        ]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    projection3Dyz(vector) {
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var canonicaMatrix = new Matrix(4, 4, [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    projection3Dxz(vector) {
        var v = [
            [vector[0]],
            [vector[1]],
            [vector[2]],
            [1]
        ]
        var canonicaMatrix = new Matrix(4, 4, [
            [1, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);
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


var vector = new Vector(2, [1, 2]);
var transf = new Tranformations();
var vetor = vector.criador()
console.log(transf.rotation2D(vetor, 30))