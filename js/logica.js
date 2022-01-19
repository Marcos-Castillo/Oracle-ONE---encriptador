let btnCodificar = document.querySelector("#encriptar");
let btnDecodificar = document.querySelector("#desencriptar");
let btnCopiar = document.querySelector("#ctrlC");
let btnSubir = document.querySelector("#btnSubir");
let btnClear = document.querySelector("#btnClear");

btnCopiar.addEventListener("click", function () {
  let copyText = document.querySelector("#textoEncriptado");
  copyText.select();
  document.execCommand("copy");
});

btnCodificar.addEventListener("click", function () {
  let textoIngresadoDom = document.querySelector("#textoIngresado");
  let textoEncriptadoDom = document.querySelector("#textoEncriptado");
  textoEncriptadoDom.value = codificador(textoIngresadoDom.value);
});

btnDecodificar.addEventListener("click", function () {
  let textoIngresadoDom = document.querySelector("#textoIngresado");
  let textoEncriptadoDom = document.querySelector("#textoEncriptado");
  textoEncriptadoDom.value = deCodificador(textoIngresadoDom.value);
});
btnSubir.addEventListener("click", function () {
  let textoIngresadoDom = document.querySelector("#textoIngresado");
  let textoEncriptadoDom = document.querySelector("#textoEncriptado");
  textoIngresadoDom.value = textoEncriptadoDom.value;
});

btnClear.addEventListener("click", function () {
  let textoIngresadoDom = document.querySelector("#textoIngresado");
  let textoEncriptadoDom = document.querySelector("#textoEncriptado");
  textoEncriptadoDom.value = "";
  textoIngresadoDom.value = "";
});
function codificador(mensaje) {
  let mensajeClave = "";
  let vocal = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  for (letra of mensaje) {
    if (vocal[letra]) {
      mensajeClave += vocal[letra];
    } else {
      mensajeClave += letra;
    }
  }
  return mensajeClave;
}
function deCodificador(mensajeClave) {
  let listKeys = ["enter", "imes", "ai", "ober", "ufat"];
  for (key of listKeys) {
    while (mensajeClave.match(key)) {
      mensajeClave = mensajeClave.replace(key, key[0]);
    }
  }
  return mensajeClave;
}
