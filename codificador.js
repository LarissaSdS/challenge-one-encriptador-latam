//Criptar//

const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem"); 

function btnEncriptar(){
	const textoEncriptado = encriptar(inputTexto.value)
	mensagem.value = textoEncriptado
	mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) {
	let matrizCodigo = [["a", "tb"], ["e", "wr"], ["i", "mb"], ["o", "xp"], ["u", "fl"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i=0; i< matrizCodigo.length; i++){
		if(stringEncriptada.includes(matrizCodigo[i][0])){
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringEncriptada
}

//Desencripitar//

const resultado = document.querySelector(".mensagem"); 

function btnDesencriptar(){
	const textoDesencriptado = desencriptar(resultado.value)
	resultado.value = textoDesencriptado
}

function desencriptar(stringDesencriptada){
	let matrizCodigo = [["tb", "a"], ["wr", "e"], ["mb", "i"], ["xp", "o"], ["fl", "u"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for(let i=0; i<matrizCodigo.length; i++){
		if(stringDesencriptada.includes(matrizCodigo[i][0])){
		stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringDesencriptada
}


//Copiar//


let btn = document.querySelector('#copy');

btn.addEventListener('click', function(e) {

  let textArea = document.querySelector(".mensagem");
  textArea.select();
  document.execCommand('copy');
  });