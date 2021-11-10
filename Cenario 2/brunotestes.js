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


class Translate {

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

    translate2D(vector, dx, dy) {
        if(dx == null || dy == null) {
            throw "Passe o valor de dx e dy!"
        }   
        let canonicaMatrix = new Matrix(3,3,[1,0,dx,0,1,dy,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
    }

    translate3D(vector, dx, dy, dz) {
        if(dx == null || dy == null || dz == null) {
            throw "Passe o valor de dx, dy e dz!"
        }
        let canonicaMatrix = new Matrix(4,4,[1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1]);
        return this.basicOperations(vector, canonicaMatrix);
    }
}

