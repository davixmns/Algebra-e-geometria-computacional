class LinearAlgebra {

    transpose(criador) {
        let transposta = [
            [criador[i].length][criador[j].length]
        ];
        for (let i = 0; i < transposta[i].length; i++) {
            for (let j = 0; j < transposta[j].length; j++) {
                transposta[i][j] = criador[j][i];
            }
        }
        return transposta;
    }

    sum(a, b) {}

    times(a, b) {}

    dot(a, b) {}

    gauss(a) {}

    solve(a) {}

}
console.log();