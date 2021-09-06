class Vector {
    //dim = dimensão do Vetor
    //elements = elementos do veto
    //objeto da classe = vetor
    constructor(dim, elements) {
        this.dim = dim
        this. elements = elements
        this.vetor = 0
    }

    criador() {
        var v = []
        for (var i = 0; i < this.dim; i++) {
            v[i] = this.elements
        }
        return this.v = v;
    }

    get(i){
        return this.v[i]
    }
    set(i, value){
        this.v[i] = value
    }
}
var elementos = [1,2,3]
var vetor = new Vector(3, elementos);
var teste = vetor.criador()
console.log(vetor)