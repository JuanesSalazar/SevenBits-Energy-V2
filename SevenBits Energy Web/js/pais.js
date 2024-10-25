
//       ***************************** PÁGINA DE PAÍSES Y REGIONES *****************************       


// Esta función se ejecuta cuando se selecciona un CONTINENTE en el filtro.
function filterData(continent) {
    let year = document.getElementById(`year-${continent}`).value;
    let country = document.getElementById(`country-${continent}`).value;
    let energy = document.getElementById(`energy-${continent}`).value;
    let table = document.getElementById(`${continent}-data`);
    let rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let countryCell = row.cells[0].innerText;
        let energyCell = row.cells[1].innerText;

        // Filtrado por país y energía
        if ((country === "" || countryCell === country) &&
            (energy === "" || energyCell.includes(energy))) {
            row.style.display = ''; // Mostrar fila
        } else {
            row.style.display = 'none'; // Ocultar fila
        }
    }

    // Obtener el tipo de energía seleccionado
    const energySelect = document.getElementById(`energy-${continent}`);
    const selectedEnergy = energySelect.options[energySelect.selectedIndex].text;

    // Actualizar la celda correspondiente al tipo de energía en la fila total
    const totalRow = document.querySelector(`#${continent}-data .continent-total`);
    totalRow.cells[1].textContent = selectedEnergy; // Tipo de energía en la fila total

    // Llamar a la función para calcular los totales después del filtrado
    calculateTotals(continent);
}

// Función para calcular el total de producción y consumo por continente
function calculateTotals(continent) {
    let totalProduction = 0;
    let totalConsumption = 0;

    // Seleccionamos la fila de datos del continente correspondiente
    const rows = document.querySelectorAll(`#${continent}-data tr`);

    // Iteramos sobre cada fila para sumar la producción y consumo
    rows.forEach(row => {
        const production = parseFloat(row.cells[2]?.textContent || 0); // Producción total
        const consumption = parseFloat(row.cells[3]?.textContent || 0); // Consumo total

        totalProduction += production;
        totalConsumption += consumption;
    });

    // Actualizamos las celdas de totales
    document.getElementById(`total-production-${continent}`).textContent = totalProduction;
    document.getElementById(`total-consumption-${continent}`).textContent = totalConsumption;
}

// Llamar a la función al cargar la página para inicializar los totales
window.onload = function() {
    calculateTotals('america');
    calculateTotals('europa');
    calculateTotals('asia');
    calculateTotals('africa');
    calculateTotals('oceania');
};


// Esta función se ejecuta cuando se selecciona un CONTINENTE en el filtro y se resetea los valores.
function resetData(continent) {
    document.getElementById(`year-${continent}`).selectedIndex = 0;
    document.getElementById(`country-${continent}`).selectedIndex = 0;
    document.getElementById(`energy-${continent}`).selectedIndex = 0;

    // Mostrar todas las filas
    let table = document.getElementById(`${continent}-data`);
    let rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = ''; // Mostrar todas las filas
    }
}

 // Mostrar los totales en la última fila
document.getElementById(`total-production-${continent}`).innerText = totalProduction;
document.getElementById(`total-consumption-${continent}`).innerText = totalConsumption;

