document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("estadoForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const opcion = document.querySelector('input[name="opcion"]:checked').value;
        const valorBusqueda = opcion === "longitud" ? document.getElementById("cantCaracter").value : document.getElementById("palabraResaltar").value.toLowerCase();

        let parrafos = document.getElementById("parrafo");

        const paragraphs = parrafos.querySelectorAll("p");
        paragraphs.forEach((p) => {
            const words = p.innerText.split(" ");
            for (let i = 0; i < words.length; i++) {
                if ((opcion === "longitud" && words[i].length == valorBusqueda) ||
                    (opcion === "palabra" && words[i].toLowerCase() === valorBusqueda)) {
                    words[i] = `<span class="resaltado">${words[i]}</span>`;
                }
            }
            p.innerHTML = words.join(" ");
        });
    });
});


