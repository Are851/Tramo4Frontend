document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("estadoForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const palabraResaltar = document.getElementById("palabraResaltar").value.toLowerCase();

        let parrafos = document.getElementById("parrafo");

        const paragraphs = parrafos.querySelectorAll("p");
        paragraphs.forEach((p) => {
            const words = p.innerText.split(" ");
            for (let i = 0; i < words.length; i++) {
                if (words[i].toLowerCase() === palabraResaltar) {
                    words[i] = `<span class="resaltado">${words[i]}</span>`;
                }
            }
            p.innerHTML = words.join(" ");
        });
    });
});

