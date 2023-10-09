function contarPalabrasUnicas() {
    const inputText = document.getElementById("inputParagraph").value.toLowerCase();
    const palabras = inputText.split(/\s+/);
    const palabrasUnicas = [];

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        if (!palabrasUnicas.includes(palabra)) {
            palabrasUnicas.push(palabra);
        }
    }

    const cantidadPalabrasUnicas = palabrasUnicas.length;
    document.getElementById("resultado").textContent = cantidadPalabrasUnicas;
}