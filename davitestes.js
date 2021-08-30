class Vector {
    //dim = dimensão do Vetor
    //elements = elementos do veto
    constructor(dim, elements) {
        var v = []
        for (i = 0; i < dim; i++) {
            v[i] = elements
        }
        console.log(v)
    }
    get(i){
        console.log(v[i])
    }
    set(i, value){
        v[i] = value
    }
}