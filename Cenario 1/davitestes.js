class Vector {
    //dim = dimensão do Vetor
    //elements = elementos do veto
    constructor(dim, elements) {
        var v = []
        elements = parseInt(lines.shift());
        for (i = 0; i < dim; i++) {
            v[i] = elements
        }
    }
    get(i){
        this.v[i]
    }
    set(i, value){
        this.v[i] = value
    }
}