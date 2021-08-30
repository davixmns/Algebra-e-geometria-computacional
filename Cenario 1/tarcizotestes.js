class Matrix {
    //rows = linhas, coluns = colunas, elements= elementos

    constructor(rows, cols, elements) {
        var m = [];
        for (var i = 0; i < rows; i++) {
            m[i] = [];

            for (var j = 0; j < cols; j++) {
                m[i][j] = elements[i][j];

            }
        }

        return m;
    }

    get(i, j) {}

    set(i, j, value) {}

}
var array = [
    [2, 3],
    [1, 5]
]
var matriz = new Matrix(2, 2, array);

//var valor = new Array(1, 2, 3, 4, 5);
//var indice = valor.indexOf(3);