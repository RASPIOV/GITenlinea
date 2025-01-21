let totalcarton = 0


function getRandomInt(max) {
    let resultado = Math.floor(Math.random() * max);
    return resultado.toString().padStart(2, '0');
}


for (let i = 1; i <= 27; i++) {
    document.getElementById(`numero${i}`).innerHTML = getRandomInt(99);
}

function inicio() {
    let numero = Sorteo();
    document.getElementById("resultado").innerHTML = numero;
    for (let i = 1; i <= 27; i++) {
        let numeroElemento = document.getElementById(`numero${i}`).innerHTML;
        if (numeroElemento == numero) {
            document.getElementById(`numero${i}`).style.backgroundColor = "red";
            totalcarton += 1
            if (totalcarton === 27) {
                alert("BINGOOO")
            } 
        }
    }
}




function Sorteo() {
    return Math.floor(Math.random() * 99) + 1;
}
