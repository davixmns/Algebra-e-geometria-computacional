class Vector {
    //dim = dimensão do Vetor
    //elements = elementos do veto
    constructor(dim, elements) {
        this.dim = dim
        this. elements = elements
    }
    criador() {
        var v = []
        for (var i = 0; i < dim; i++) {
            v[i] = elements
        }
    }
    get(i){
        return this.v[i]
    }
    set(i, value){
        this.v[i] = value
    }
}
var vetor = [1,2,3];
var objeto = new Vector(3, vetor);
console.log(Vector.get(2))
console.log(Vector)