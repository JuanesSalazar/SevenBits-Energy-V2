
//       ***************************** PÁGINA DE PAÍSES Y REGIONES *****************************       


// Esta función se ejecuta cuando se selecciona un CONTINENTE en el filtro.
function filterData(continent) {
    const year = document.getElementById(`year-${continent}`).value;
    const country = document.getElementById(`country-${continent}`).value;
    const energy = document.getElementById(`energy-${continent}`).value;

    const table = document.getElementById(`${continent}-data`);
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const countryCell = row.cells[0].innerText;
        const energyCell = row.cells[1].innerText;

        const matchesYear = year === "" || year === row.cells[2].innerText; // Ajusta según tu tabla
        const matchesCountry = country === "" || countryCell.includes(country);
        const matchesEnergy = energy === "" || energyCell.includes(energy);

        if (matchesYear && matchesCountry && matchesEnergy) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}


 // Mostrar los totales en la última fila
document.getElementById(`total-production-${continent}`).innerText = totalProduction;
document.getElementById(`total-consumption-${continent}`).innerText = totalConsumption;