
//       *****************************  PÁGINA DE ENERGÍA RENOVABLE   *****************************        
// Función para rellenar dropdowns
function rellenarDropdown(elemento, opciones) {
    opciones.forEach(opcion => {
        let opcionElemento = document.createElement("option");
        opcionElemento.value = opcion;
        opcionElemento.textContent = opcion;
        elemento.appendChild(opcionElemento);
    });
}

// Rellenar dropdowns de años, países y tipos de energía
const anios = [];
for (let year = 2024; year >= 1900; year--) {
    anios.push(year);
}
const paises = ["Argentina", "Australia", "Austria", "Bélgica", "Brasil", "Canadá", "Chile", "China", "Colombia", "Corea del Sur", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "España", "Estados Unidos", "Etiopía", "Filipinas", "Finlandia", "Francia", "Grecia", "Guatemala", "Honduras", "India", "Indonesia", "Irak", "Irlanda", "Israel", "Italia", "Japón", "Kenia", "Líbano", "Malasia", "Marruecos", "México", "Nigeria", "Noruega", "Nueva Zelanda", "Países Bajos", "Panamá", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "Rusia", "Sudáfrica"];
const tiposEnergia = ["Solar", "Eólica", "Biomasa", "Geotérmica", "Hidroeléctrica"];

// Selección de dropdowns en ambas secciones
const dropdownsProduccion = {
    pais: document.getElementById("pais-produccion"),
    energia: document.getElementById("energia-produccion"),
    anio: document.getElementById("anio-produccion")
};
const dropdownsConsumo = {
    pais: document.getElementById("pais-consumo"),
    energia: document.getElementById("energia-consumo"),
    anio: document.getElementById("anio-consumo")
};

// Rellenar dropdowns de producción
rellenarDropdown(dropdownsProduccion.pais, paises);
rellenarDropdown(dropdownsProduccion.energia, tiposEnergia);
rellenarDropdown(dropdownsProduccion.anio, anios);

// Rellenar dropdowns de consumo
rellenarDropdown(dropdownsConsumo.pais, paises);
rellenarDropdown(dropdownsConsumo.energia, tiposEnergia);
rellenarDropdown(dropdownsConsumo.anio, anios);

// Evento "Enviar" para la sección de producción
document.getElementById('enviar-btn-produccion').addEventListener('click', function() {
    const pais = dropdownsProduccion.pais.value;
    const energia = dropdownsProduccion.energia.value;
    const anio = dropdownsProduccion.anio.value;

    if (pais && energia && anio) {
        document.getElementById('anio-seleccionado-produccion').textContent = anio;
        document.getElementById('pais-seleccionado-produccion').textContent = pais;
        document.getElementById('energia-generada-produccion').textContent = energia;
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});

// Evento "Enviar" para la sección de consumo
document.getElementById('enviar-btn-consumo').addEventListener('click', function() {
    const pais = dropdownsConsumo.pais.value;
    const energia = dropdownsConsumo.energia.value;
    const anio = dropdownsConsumo.anio.value;

    if (pais && energia && anio) {
        document.getElementById('anio-seleccionado-consumo').textContent = anio;
        document.getElementById('pais-seleccionado-consumo').textContent = pais;
        document.getElementById('energia-generada-consumo').textContent = energia;
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});


// SLIDER. Este código muestra cómo se puede utilizar un slider para mostrar imágenes en la página de energía renovable.

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

//

