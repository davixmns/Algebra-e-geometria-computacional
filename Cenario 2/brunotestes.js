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
class LinearAlgebra {
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

            aux = [objLA.dot(cisy, v)[0][0], objLA.dot(cisy, v)[1][0]]
            return aux;

        } else if (kx > 0) {

            aux = [objLA.dot(cisx, v)[0][0], objLA.dot(cisx, v)[1][0]]
            return aux;

        } else {
            return vector
        }

    }

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
}
var vector2d = new Vector(2,[2, 4]);
var vector3d = new Vector(3, [4, 6, 9]);
var transf = new Tranformations();

var vector2d = vector2d.criador();
var vector3d = vector3d.criador();

//exemplo translate 3D
console.log(transf.translate3D(vector3d, 2, 2 ,2));
//exemplo translate 2D
console.log(transf.translate2D(vector2d,3 ,2))