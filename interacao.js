const quadrados = document.querySelectorAll(".quadrado");

const cores = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

function selecionados(k, n) {
    lista = [k];
    const linha = k/n;
    if (linha < 1) {
        lista.push(k+n)
    } else if (n-1 <= linha) {
        lista.push(k - n)
    } else {
        lista.push(k - n, k + n)
    };

    const coluna = k % n;
    if (coluna == 0) {
        lista.push(k + 1)
    } else if (coluna == 3) {
        lista.push(k - 1)
    } else {
        lista.push(k - 1, k + 1)
    };
    return lista
}

function alterarCor(lista) {
    lista.forEach(q => {
        cores[q]++
        if (cores[q] % 2 == 0) {
            quadrados[q].style.backgroundColor = "#fff"
            console.log("essa porra mudou de cor, quadrado:", q) //não esquecer de tirar isso depois
        } else {
            quadrados[q].style.backgroundColor = "#000"
        }
    })
}

function destacar(lista) {
    lista.forEach(q => {
        quadrados[q].style.boxShadow = "0px 0px 5px 5px rgb(24, 189, 32)"
        quadrados[q].style.transform = "scale(1.05)"
    })
}

function resetDestacar(lista) {
    lista.forEach(q => {
        quadrados[q].style.boxShadow = "2px 2px 5px 2px #d0d0d0"
        quadrados[q].style.transform = "scale(1)"
        
    })
}

quadrados.forEach(quadrado => {
    
    quadrado.addEventListener("click", evento => {
        const quadradoClicado = Array.from(quadrados).indexOf(evento.target);
        alterarCor(selecionados(quadradoClicado, 4))
        verificar(4)
    })

    quadrado.addEventListener("mouseover", evento => {
        const quadradoEvento = Array.from(quadrados).indexOf(evento.target);
        console.log("entrou no quadrado:", quadradoEvento) //retirar depois
        destacar(selecionados(quadradoEvento, 4))
    })

    quadrado.addEventListener("mouseleave", evento => {
        const quadradoEvento = Array.from(quadrados).indexOf(evento.target);
        console.log("saiu do quadrado:", quadradoEvento) //retirar depois
        resetDestacar(selecionados(quadradoEvento, 4))
    })
})


const msg = document.querySelector(".msg")
let brancos = 0;
function verificar(n) {
    brancos = 0;
    for (const branco of cores) {
        if (branco %2 == 0) {
            brancos++
        }
    }
    if (brancos == n) {
        msg.innerHTML = "<h3>Parabéns! Você conseguiu.</h3>"
        cores.forEach(q => {
            q = 1
        })
    } else {
        msg.innerHTML = "<strong>Objetivo:</strong> Altere as cores de todos os quadrados para branco."
    }
}
