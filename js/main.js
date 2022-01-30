function encriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_encriptada = palabra.replace(/e/, "enter").replace(/i/, "imes").replace(/a/,"ai").replace(/o/,"ober").replace(/u/,"ufat");
    document.getElementById("resultado").innerHTML = palabra_encriptada;    
}
function desencriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_desencriptada = palabra.replace(/enter/, "e").replace(/imes/, "i").replace(/ai/,"a").replace(/ober/,"o").replace(/ufat/,"u");
    document.getElementById("resultado").innerHTML = palabra_desencriptada;
}
// Copiar texto + alerta
function copyToClipBoard() {
    var content = document.getElementById('resultado');    
    content.select();
    document.execCommand('copy');
    alert("Mensaje Copiado");
}
// Permitir solo minusculas y espacios
function replace(elemento){
  let texto = elemento.value
  texto = texto.split(/[^a-z ""\#\&]+/g)
  texto = texto.join("")
  elemento.value = texto
}
