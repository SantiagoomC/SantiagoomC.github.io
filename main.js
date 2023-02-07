

// Aprendiendo desde acá:
    //Constante para el textarea de salida
    const textareaCopiar = document.getElementById("out-text");
    //Constante para la imagen del muñeco
    const munecoConLupa = document.getElementById("munecoConLupei");
    //Constante para el heading
    const headingHTres = document.getElementById("hChi");
    //Constante para el parrafo
    const parrafoP = document.getElementById("pChi");
    // variable del textarea principal
    var textareaPrincipal = document.getElementById("texto-encriptador");
    // Botón encriptador
    const botonEncriptador = document.getElementById("boton-encriptar");
    // Botón Desencriptar
    const botonDesencriptador = document.getElementById("boton-desencriptar");
    //Botón copiar
    const botonCopiador = document.getElementById("boton-copiar");
    

//Prueba

    function copyText() {
        if (textareaPrincipal.value.trim() === "") {
                alert("El textarea principal está vacío, ingrese un texto para transferir");
                textareaCopiar.style.display = "none";
                botonCopiador.style.display = "none";
                headingHTres.style.display = "block";
                parrafoP.style.display = "block";
            } else{
                    textareaCopiar.style.display = "block";
                    botonCopiador.style.display = "block";
                    headingHTres.style.display = "none";
                    parrafoP.style.display = "none";
                }
    }

//Encriptador

botonEncriptador.addEventListener("click", () => {
    let phrase = textareaPrincipal.value;
    let newPhrase = "";


    for (let i = 0; i < phrase.length; i++) {
        let letra = phrase[i];
        if (letra === "a") {
            letra = "ai";
        } else if (letra === "e") {
        letra = "enter";
        } else if (letra === "i") {
        letra = "imes";
        } else if (letra === "o") {
        letra = "ober";
        } else if (letra === "u") {
        letra = "ufat";
        }
        newPhrase += letra;
    }
    textareaCopiar.value = newPhrase;
});
    
  
  
//Desencriptador
botonDesencriptador.addEventListener("click", () => {
    let phrase = textareaPrincipal.value;
    let newPhrase = "";

    for (let i = 0; i < phrase.length; i++) {
        let letra = phrase[i];
        if (letra + phrase[i + 1] === "ai") {
            letra = "a";
            i++;
        } else if (letra + phrase[i + 1] + phrase[i + 2] + phrase[i + 3] + phrase[i + 4] === "enter") {
            letra = "e";
            i += 4;
        } else if (letra + phrase[i + 1] + phrase[i + 2] + phrase[i + 3] === "imes") {
            letra = "i";
            i += 3;
        } else if (letra + phrase[i + 1] + phrase[i + 2] + phrase[i + 3] === "ober") {
            letra = "o";
            i += 3;
        } else if (letra + phrase[i + 1] + phrase[i + 2] + phrase[i + 3] === "ufat") {
            letra = "u";
            i += 3;
        }
        newPhrase += letra;
    }
    textareaCopiar.value = newPhrase;
});

// Función que va a copiar

botonCopiador.addEventListener("click", function(){
    navigator.clipboard.writeText(textareaCopiar.value).then(function() {
        alert("Texto copiado al portapapeles");
      }, function(err) {
        alert("Error al copiar texto al portapapeles", err);
      });
});


