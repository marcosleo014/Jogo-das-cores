const quadrados = document.querySelectorAll(".quadrado");

const cores = [1,1,1,1,1,1,1,1,1];

function incrementar(lista) {
    lista.forEach(i => {
        cores[i]++
    })
}

function alterarCor(lista) {
    lista.forEach(q => {
        if (cores[q] % 2 == 0) {
            quadrados[q].style.backgroundColor = "#fff"
        } else {
            quadrados[q].style.backgroundColor = "#000"
        }
    })
}
quadrados.forEach(quadrado => {
    quadrado.addEventListener("click", evento => {
        const quadradoClicado = Array.from(quadrados).indexOf(evento.target);
        switch (quadradoClicado) {
            case 0:
                incrementar([0,1,3]);
                alterarCor([0,1,3]);
                break;
            case 1:
                incrementar([0,1,2,4]);
                alterarCor([0,1,2,4]);
                break;
            case 2:
                incrementar([1,2,5]);
                alterarCor([1,2,5]);
                break;
            case 3:
                incrementar([0,3,4,6]);
                alterarCor([0,3,4,6]);
                break;
            case 4:
                incrementar([1,3,4,5,7]);
                alterarCor([1,3,4,5,7]);
                break;
            case 5:
                incrementar([2,4,5,8]);
                alterarCor([2,4,5,8]);
                break;
            case 6:
                incrementar([3,6,7]);
                alterarCor([3,6,7]);
                break;
            case 7:
                incrementar([4,6,7,8]);
                alterarCor([4,6,7,8]);
                break;
            case 8:
                incrementar([5,7,8]);
                alterarCor([5,7,8]);
                break;
        }
    })
})

