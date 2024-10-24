
//       ***************************** PÁGINA DE RESULTADOS *****************************       

// Mostrar resultados al cargar la página (página de búsqueda de resultados)
document.addEventListener('DOMContentLoaded', function() {
    const query = getQueryParam('query');
    const content = [
        { text: "Las energías renovables son una fuente importante para el futuro.", url: "pagina_energia_renovable.html" }, //ESTO NO ME SIRVE
        { text: "La energía solar y eólica son dos de las más utilizadas.", url: "pagina_solar_eolica.html" } //ESTO NO ME SIRVE
    ];
    const resultsDiv = document.getElementById('results');

    // Filtrar y mostrar resultados (página de búsqueda de resultados)
    content.forEach(item => {
        if (item.text.toLowerCase().includes(query)) {
            const highlightedText = highlightText(item.text, query);
            const p = document.createElement('p');
            const link = document.createElement('a');
            link.href = item.url; // Enlazar a la URL correspondiente
            link.innerHTML = highlightedText; // Insertar texto resaltado
            link.target = "_blank"; // Abrir en una nueva pestaña (opcional)
            p.appendChild(link); // Añadir el enlace al párrafo
            resultsDiv.appendChild(p);
        }
    });

    if (resultsDiv.children.length === 0) {
        resultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    }
});
