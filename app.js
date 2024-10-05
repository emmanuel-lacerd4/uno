/**
 * Jogo do UNO!
 * @author Emmanuel L. Nogueira
 * @version 1.0
 * @link https://github.com/emmanuel-lacerd4/uno
 */

let faces = [
    { nome: "a_bloq", cor: "red", img: "img/a_bloq.png" },
    { nome: "a_mais2", cor: "blue", img: "img/a_mais2.png" },
    { nome: "a_rev", cor: "green", img: "img/a_rev.png" },
    { nome: "a0", cor: "yellow", img: "img/a0.png" },
    { nome: "a1", cor: "yellow", img: "img/a1.png" },
    { nome: "a2", cor: "blue", img: "img/a2.png" },
    { nome: "a3", cor: "green", img: "img/a3.png" },
    { nome: "a4", cor: "yellow", img: "img/a4.png" },
    { nome: "a5", cor: "red", img: "img/a5.png" },
    { nome: "a6", cor: "blue", img: "img/a6.png" },
    { nome: "a7", cor: "green", img: "img/a7.png" },
    { nome: "a8", cor: "yellow", img: "img/a8.png" },
    { nome: "a9", cor: "red", img: "img/a9.png" },
    { nome: "mais_4", cor: "black", img: "img/mais_4.png" },
    { nome: "mud", cor: "black", img: "img/mud.png" }
];

function sortear() {
    // Lógica principal do sorteio da carta.
    let index = Math.floor(Math.random() * faces.length);
    let face = faces[index];

    // Renderizar a imagem da carta.
    let cc = document.getElementById('centro');
    cc.innerHTML = `<img src="${face.img}" alt="${face.nome}" style="width: 100%; height: auto;">`; // Adiciona a imagem

    // Atribuir um estilo (CSS3) à tag HTML.
    cc.style.color = face.cor; // Define a cor da carta

    // Remover textos dos cantos
    document.getElementById('supEsq').innerText = ""; // Limpa o canto superior esquerdo
    document.getElementById('infDir').innerText = ""; // Limpa o canto inferior direito
}
