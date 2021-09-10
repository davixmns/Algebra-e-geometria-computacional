class LinearAlgebra {
    constructor(objeto1, objeto2) {
        this.objeto1 = objeto1;
        this.objeto2 = objeto2;
    }
    // objeto1: objeto de Matrix ou Vector
    // objeto2: objeto de Matrix ou Vector

    transpose(objeto1) {
        var o = this.objeto1;
        var t = [];
        t = reverse(o);
        return this.t;
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

    dot(a, b) {}

    gauss(a) {}

    solve(a) {}
}