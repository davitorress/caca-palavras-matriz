/*
1 amarelo
2 azul
3 ametista
4 bege
5 branco
6 caramelo
7 ciano
8 vermelho
9 violeta
10 verde
*/

const matriz = [
	["R", "S", "B", "E", "G", "E", "N", "E", "E", "T", "B", "E"],
	["V", "N", "O", "U", "O", "V", "O", "E", "V", "V", "S", "I"],
	["E", "O", "N", "B", "L", "O", "H", "E", "I", "E", "A", "N"],
	["E", "C", "A", "R", "A", "M", "E", "L", "O", "R", "A", "S"],
	["V", "I", "L", "A", "E", "H", "T", "A", "L", "M", "M", "N"],
	["E", "A", "C", "N", "I", "I", "D", "M", "E", "E", "E", "O"],
	["R", "I", "S", "C", "C", "T", "I", "A", "T", "L", "T", "A"],
	["D", "W", "I", "O", "C", "D", "W", "R", "A", "H", "I", "E"],
	["E", "C", "H", "L", "I", "D", "E", "E", "V", "O", "S", "I"],
	["R", "E", "E", "G", "A", "Z", "U", "L", "A", "H", "T", "I"],
	["B", "E", "A", "A", "N", "O", "H", "O", "R", "D", "A", "E"],
	["S", "D", "L", "E", "O", "E", "S", "R", "R", "G", "A", "C"],
];

function mostrarCacaPalavras() {
	for (let i = 0; i < matriz.length; i++) {
		document.write("<tr>");

		for (let j = 0; j < matriz[i].length; j++) {
			if (i == 0 && (j == 2 || j == 3 || j == 4 || j == 5)) {
				document.write(`<td class="bege">${matriz[i][j]}</td>`);
			} else if (i == 3 && (j == 1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j == 7 || j == 8)) {
				document.write(`<td class="caramelo">${matriz[i][j]}</td>`);
			} else if (i == 9 && (j == 4 || j == 5 || j == 6 || j == 7)) {
				document.write(`<td class="azul">${matriz[i][j]}</td>`);
			} else if ((i == 4 || i == 5 || i == 6 || i == 7 || i == 8) && j == 0) {
				document.write(`<td class="verde">${matriz[i][j]}</td>`);
			} else if ((i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7) && j == 3) {
				document.write(`<td class="branco">${matriz[i][j]}</td>`);
			} else if ((i == 7 || i == 8 || i == 9 || i == 10 || i == 11) && j == 4) {
				document.write(`<td class="ciano">${matriz[i][j]}</td>`);
			} else if ((i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10) && j == 7) {
				document.write(`<td class="amarelo">${matriz[i][j]}</td>`);
			} else if ((i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7) && j == 8) {
				document.write(`<td class="violeta">${matriz[i][j]}</td>`);
			} else if ((i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8) && j == 9) {
				document.write(`<td class="vermelho">${matriz[i][j]}</td>`);
			} else if ((i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 || i == 9 || i == 10) && j == 10) {
				document.write(`<td class="ametista">${matriz[i][j]}</td>`);
			} else {
				document.write(`<td>${matriz[i][j]}</td>`);
			}
		}

		document.write("</tr>");
	}
}
