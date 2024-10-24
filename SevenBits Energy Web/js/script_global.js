//       ***************************** CUALQUIER PÁGINA   *****************************        



// Esta función corresponde al scroll, tiene como objetivo subir rápidamente al tope de la página (páginas Energía, inicio, país, búsqueda).
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Esta función se ejecuta cada vez que se presiona el botón de búsqueda (páginas Energía, inicio, país, búsqueda)
document.querySelector('.search-container button').addEventListener('click', function() {
    const query = document.querySelector('.search-container input').value.toLowerCase().trim();

    // Ignorar caracteres especiales y números, y palabras de un solo dígito
    if (query.length < 2 || /\d/.test(query) || /[^a-zA-Záéíóúñü]/.test(query)) {
        alert('Por favor, ingresa al menos dos letras.');
        return;
    }

    // Redirigir a la página de resultados (páginas Energía, inicio, país, búsqueda)
    window.location.href = `resultados.html?query=${encodeURIComponent(query)}`;
});


