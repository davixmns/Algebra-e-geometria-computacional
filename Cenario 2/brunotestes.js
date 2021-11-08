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

}
class Translate {
    
}