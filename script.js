let codigo = "";

document.addEventListener("keydown", function(event) {

    codigo += event.key.toLowerCase();

    if (codigo.length > 20) {
        codigo = codigo.slice(-20);
    }

    if (codigo.endsWith("2011")) {
        window.location.href = "secret.html";
    }

});
