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

        var m = [];
        for (var x = 0; x < 2; x++) {
            m[x] = [];
            for (var y = 0; y < 1; y++) {
                m[x][y] = 0;
            }
        }

        if (ky > 0) {
            for (var i = 0; i < cisy.length; i++) {
                for (var j = 0; j < v[0].length; j++) {
                    for (var k = 0; k < cisy[0].length; k++) {
                        m[i][j] = m[i][j] + cisy[i][k] * v[k][j];
                    }
                }
            }
        } else if (kx > 0) {

            for (var i = 0; i < cisx.length; i++) {
                for (var j = 0; j < v[0].length; j++) {
                    for (var k = 0; k < cisx[0].length; k++) {
                        m[i][j] = m[i][j] + cisx[i][k] * v[k][j];
                    }
                }
            }

        } else {
            return v
        }




        return m;
    }
}

// EXEMPLO DO METODO DE CISALHAMENTO 
var vector = new Vector(2, [1, 2]);
var transf = new Tranformations();
var vetor = vector.criador()
console.log(transf.shearing(vetor, 0, 0))

// class Translate {}

// class Rotation {}

// class Reflection {}

// class Projection {}

// class Shearing {} OK 