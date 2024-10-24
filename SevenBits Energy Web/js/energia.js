
//       *****************************  PÁGINA DE ENERGÍA RENOVABLE   *****************************        


// Esta función se llama cuando se envía el formulario.
document.getElementById('enviar-btn').addEventListener('click', function() {
    const pais = document.getElementById('pais').value;
    const energia = document.getElementById('energia').value;
    const anio = document.getElementById('anio').value;

    // Validación de campos
    if (pais && energia && anio) {
        document.getElementById('pais-seleccionado').textContent = pais;
        document.getElementById('energia-generada').textContent = energia; // Aquí deberías calcular o extraer el valor real
        document.getElementById('anio-seleccionado').textContent = anio;
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});

// Rellenar el dropdown de años 
const inicioAnio = document.getElementById("anio");
const anioInicial = 2024;
const anioFinal = 1900;

for (let year = anioInicial; year >= anioFinal; year--) {
    let opcionAnio = document.createElement("option");
    opcionAnio.value = year;
    opcionAnio.textContent = year;
    inicioAnio.appendChild(opcionAnio);
}

// Rellenar el dropdown de países
const paises = ["Argentina", "Australia", "Austria", "Bélgica", "Brasil", "Canadá", "Chile", "China", "Colombia", "Corea del Sur", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "España", "Estados Unidos", "Etiopía", "Filipinas", "Finlandia", "Francia", "Grecia", "Guatemala", "Honduras", "India", "Indonesia", "Irak", "Irlanda", "Israel", "Italia", "Japón", "Kenia", "Líbano", "Malasia", "Marruecos", "México", "Nigeria", "Noruega", "Nueva Zelanda", "Países Bajos", "Panamá", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "Rusia", "Sudáfrica"];

const paisSelect = document.getElementById("pais");
paises.forEach(pais => {
    let opcionPais = document.createElement("option");
    opcionPais.value = pais;
    opcionPais.textContent = pais;
    paisSelect.appendChild(opcionPais);
});

// Rellenar el dropdown de tipos de energía
const tiposEnergia = ["Solar", "Eólica", "Biomasa", "Geotérmica", "Hidroeléctrica"];
const energiaSelect = document.getElementById("energia");
tiposEnergia.forEach(energia => {
    let opcionEnergia = document.createElement("option");
    opcionEnergia.value = energia;
    opcionEnergia.textContent = energia;
    energiaSelect.appendChild(opcionEnergia);
});

