function encriptar() {
    var texto=document.getElementById("text-input").value.toLowerCase();
    // i es para que afecte mayusculas y minusculas
    // g es para que afecte toda la linea u oración
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrada = texto.replace(/e/igm,"enter"); //El separar con diagonales es para que revise toda la plabra 
    var txtCifrada = txtCifrada.replace(/o/igm,"ober");
    var txtCifrada = txtCifrada.replace(/i/igm,"imes");
    var txtCifrada = txtCifrada.replace(/a/igm,"ai");
    var txtCifrada = txtCifrada.replace(/u/igm,"ufat");

    document.getElementById("text-area-right").innerHTML = txtCifrada;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar() {
    var texto=document.getElementById("text-input").value.toLowerCase();
    // i es para que afecte mayusculas y minusculas
    // g es para que afecte toda la linea u oración
    // m es para que afecte a multiples lineas o parrafos
    var txtCifrada = texto.replace(/enter/igm,"e"); //El separar con diagonales es para que revise toda la plabra 
    var txtCifrada = txtCifrada.replace(/ober/igm,"o");
    var txtCifrada = txtCifrada.replace(/imes/igm,"i");
    var txtCifrada = txtCifrada.replace(/ai/igm,"a");
    var txtCifrada = txtCifrada.replace(/ufat/igm,"u");

    document.getElementById("text-area-right").innerHTML = txtCifrada;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#text-area-right");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se ha copiado el mensaje en el portapapeles!");
}