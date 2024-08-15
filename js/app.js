const texto = document.getElementById('textoencriptar');
const textoEncriptado = document.getElementById('textoEncritado');

function codificar(){
    let enctTemp = "";
    let textoencriptar = texto.value;
    for(var i = 0; i < textoencriptar.length; i++){
        if(textoencriptar[i] === 'a'){
            enctTemp = enctTemp + "ai";
        } else if(textoencriptar[i] === 'e'){
            enctTemp = enctTemp + "enter";
        } else if(textoencriptar[i] === 'i'){
            enctTemp = enctTemp + "imes";
        } else if(textoencriptar[i] === 'o'){
            enctTemp = enctTemp + "ober";
        } else if(textoencriptar[i] === 'u'){
            enctTemp = enctTemp + "ufat";
        } else {
            enctTemp = enctTemp + textoencriptar[i];
        }
    }
    textoEncriptado.value = enctTemp;
    texto.value = "";
    textoEncriptado.style.backgroundImage = "none";
}

function copiar(){
    var copyTextarea = document.getElementById('textoEncritado').value;
    navigator.clipboard.writeText(copyTextarea);
    textoEncriptado.value = "";
}

let replaceDecode = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
function desencriptar(texto){
    texto = texto.toLowerCase();

    for(i = 0; i < replaceDecode.length; i++){
        if(texto.includes(replaceDecode[i][1])){
            texto = texto.replaceAll(replaceDecode[i][1], replaceDecode[i][0]);
        }
    }
    return texto;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(texto.value);
    textoEncriptado.value = textoDesencriptado;
    texto.value = "";
}