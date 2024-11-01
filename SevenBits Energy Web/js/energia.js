//       *****************************  PÁGINA DE ENERGÍA RENOVABLE   *****************************

//API Ema
google.charts.load("current", { packages: ["corechart"] });

//! Emanuel no uso este codigo
//? // Función para rellenar dropdowns
//? function rellenarDropdown(elemento, opciones) {
//?   opciones.forEach((opcion) => {
//?     let opcionElemento = document.createElement("option");
//?     opcionElemento.value = opcion;
//?     opcionElemento.textContent = opcion;
//?     elemento.appendChild(opcionElemento);
//?   });
//? }
//?
//? // Rellenar dropdowns de años, países y tipos de energía
//? const anios = [];
//? for (let year = 2022; year >= 1965; year--) {
//?   anios.push(year);
//? }
//? const paises = [
//?   "Argentina",
//?   "Australia",
//?   "Austria",
//?   "Bélgica",
//?   "Brasil",
//?   "Canadá",
//?   "Chile",
//?   "China",
//?   "Colombia",
//?   "Corea del Sur",
//?   "Costa Rica",
//?   "Croacia",
//?   "Cuba",
//?   "Dinamarca",
//?   "Egipto",
//?   "El Salvador",
//?   "Emiratos Árabes Unidos",
//?   "Spain",
//?   "Estados Unidos",
//?   "Etiopía",
//?   "Filipinas",
//?   "Finlandia",
//?   "Francia",
//?   "Grecia",
//?   "Guatemala",
//?   "Honduras",
//?   "India",
//?   "Indonesia",
//?   "Irak",
//?   "Irlanda",
//?   "Israel",
//?   "Italia",
//?   "Japón",
//?   "Kenia",
//?   "Líbano",
//?   "Malasia",
//?   "Marruecos",
//?   "México",
//?   "Nigeria",
//?   "Noruega",
//?   "Nueva Zelanda",
//?   "Países Bajos",
//?   "Panamá",
//?   "Paraguay",
//?   "Perú",
//?   "Polonia",
//?   "Portugal",
//?   "Reino Unido",
//?   "Rusia",
//?   "Sudáfrica",
//? ];
//? const tiposEnergia = [
//?   "Solar",
//?   "Eólica",
//?   "Biomasa",
//?   "Geotérmica",
//?   "Hidroeléctrica",
//? ];
//?
//? // Selección de dropdowns en ambas secciones
//? const dropdownsProduccion = {
//?   pais: document.getElementById("pais-produccion"),
//?   energia: document.getElementById("energia-produccion"),
//?   anio: document.getElementById("anio-produccion"),
//? };
//? const dropdownsConsumo = {
//?   pais: document.getElementById("pais-consumo"),
//?   energia: document.getElementById("energia-consumo"),
//?   anio: document.getElementById("anio-consumo"),
//? };
//?
//? // Rellenar dropdowns de producción
//? rellenarDropdown(dropdownsProduccion.pais, paises);
//? rellenarDropdown(dropdownsProduccion.energia, tiposEnergia);
//? rellenarDropdown(dropdownsProduccion.anio, anios);
//?
//? // Rellenar dropdowns de consumo
//? rellenarDropdown(dropdownsConsumo.pais, paises);
//? rellenarDropdown(dropdownsConsumo.energia, tiposEnergia);
//? rellenarDropdown(dropdownsConsumo.anio, anios);

// Comprueba que se seleccionen todos los campos
function validarSeleccion(X, Y, Z) {
  return X !== "" && Y !== "" && Z !== "";
}

// Evento "Enviar" para la sección de producción
document
  .getElementById("enviar-btn-produccion")
  .addEventListener("click", function () {
    // Guarda el texto de la opcion seleccionada
    let countrySelectP =
      document.getElementById("pais-produccion").options[
        document.getElementById("pais-produccion").selectedIndex
      ].innerText;
    let yearSelectP =
      document.getElementById("anio-produccion").options[
        document.getElementById("anio-produccion").selectedIndex
      ].innerText;
    let energySelectP =
      document.getElementById("energia-produccion").options[
        document.getElementById("energia-produccion").selectedIndex
      ].innerText;

    // Guarda el valor de la opcion selecciondas
    const countryP = document.getElementById("pais-produccion").value;
    const yearP = document.getElementById("anio-produccion").value;
    const energyP = parseInt(
      document.getElementById("energia-produccion").value
    );

    if (validarSeleccion(countryP, energyP, yearP)) {
      const queryStringConsultaProduccion = encodeURIComponent(
        "SELECT A, C, D, E, F, G"
      );

      // Crear la consulta de Google Sheets de Produccion
      const queryConsultaProduccion = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1E5XXPUeseX9K5t-QInf1LhnZyajAWBC0g5f7fIKYa3I/gviz/tq?gid=0&headers=1&tq=" +
          queryStringConsultaProduccion
      );

      // Ejecutar la consulta y procesar los resultados
      queryConsultaProduccion.send((response) => {
        if (response.isError()) {
          console.error("Error en la consulta:", response.getMessage());
          return;
        }

        const data = response.getDataTable();

        let encontradoP = false;

        // Recorre todas las filas en búsqueda del país y año especificados
        for (let i = 0; i < data.getNumberOfRows(); i++) {
          const countryResultP = data.getValue(i, 0); // Columna A (país)
          const yearResultP = data.getValue(i, 1); // Columna C (año)
          const produccion = data.getValue(i, energyP); // Columna typeE dependiendo del tipo de enrgia (producción)

          if (countryResultP == countryP && yearResultP == yearP) {
            console.log(
              `País: ${countryResultP}, Año: ${yearResultP}, Energia: ${energySelectP},Producción: ${produccion}` //Depuracion en consola
            );

            // Asigna los valores seleccionados y encontrados a los span correspondientes
            document.getElementById("anio-seleccionado-produccion").innerHTML =
              yearSelectP;
            document.getElementById("pais-seleccionado-produccion").innerHTML =
              countrySelectP;
            document.getElementById("twh-produccion").innerHTML = produccion;
            document.getElementById("energia-generada-produccion").innerHTML =
              energySelectP;

            if (produccion > 0) {
              document.getElementById(
                "casas-equivalente-produccion"
              ).innerHTML = ((parseFloat(produccion) / 3650) * 10000).toFixed(
                2
              ); // Calcula la produccion en millones de casas
            } else {
              document.getElementById(
                "casas-equivalente-produccion"
              ).innerHTML = 0;
            }

            encontradoP = true;
            break; // Deja de buscar una vez encontrada la coincidencia
          }
        }

        if (!encontradoP) {
          alert("No se encontraron datos para ese país, energia o año.");
        }
      });
    } else {
      alert("Por favor, completa todos los campos antes de enviar.");
    }
  });

// Evento "Enviar" para la sección de consumo
document
  .getElementById("enviar-btn-consumo")
  .addEventListener("click", function () {
    // Guarda el texto de la opcion seleccionada
    let countrySelectC =
      document.getElementById("pais-consumo").options[
        document.getElementById("pais-consumo").selectedIndex
      ].innerText;
    let yearSelectC =
      document.getElementById("anio-consumo").options[
        document.getElementById("anio-consumo").selectedIndex
      ].innerText;
    let energySelectC =
      document.getElementById("energia-consumo").options[
        document.getElementById("energia-consumo").selectedIndex
      ].innerText;

    // Guarda el valor de la opcion selecciondas
    const countryC = document.getElementById("pais-consumo").value;
    const yearC = document.getElementById("anio-consumo").value;
    const energyC = parseInt(document.getElementById("energia-consumo").value);

    if (validarSeleccion(countryC, energyC, yearC)) {
      const queryStringConsultaConsumo = encodeURIComponent(
        "SELECT A, C, D, E, F, G"
      );

      // Crear la consulta de Google Sheets de Consumo
      const queryConsultaConsumo = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1FTQaf0B1teJqkrg2vtmOef3NJbwf3JdoqFgh_jiSYxM/gviz/tq?gid=0&headers=1&tq=" +
          queryStringConsultaConsumo
      );

      // Ejecutar la consulta y procesar los resultados
      queryConsultaConsumo.send((response) => {
        if (response.isError()) {
          console.error("Error en la consulta:", response.getMessage());
          return;
        }

        const data = response.getDataTable();

        let encontradoC = false;

        // Recorre todas las filas en búsqueda del país y año especificados
        for (let i = 0; i < data.getNumberOfRows(); i++) {
          const countryResultC = data.getValue(i, 0); // Columna A (país)
          const yearResultC = data.getValue(i, 1); // Columna C (año)
          const consumo = data.getValue(i, energyC); // Columna typeE dependiendo del tipo de enrgia (producción)

          if (countryResultC == countryC && yearResultC == yearC) {
            console.log(
              `País: ${countryResultC}, Año: ${yearResultC}, Energia: ${energySelectC},Producción: ${consumo}`
            );

            // Asigna los valores seleccionados y encontrados a los span correspondientes
            document.getElementById("anio-seleccionado-consumo").innerHTML =
              yearSelectC;
            document.getElementById("pais-seleccionado-consumo").innerHTML =
              countrySelectC;
            document.getElementById("twh-consumo").innerHTML = consumo;
            document.getElementById("energia-generada-consumo").innerHTML =
              energySelectC;

            if (consumo > 0) {
              document.getElementById("casas-equivalente-consumo").innerHTML = (
                (parseFloat(consumo) / 3650) *
                10000
              ).toFixed(2); // Calcula el consumo en millones de casas
            } else {
              document.getElementById(
                "casas-equivalente-conusmo"
              ).innerHTML = 0;
            }

            encontradoC = true;
            break; // Deja de buscar una vez encontrada la coincidencia
          }
        }

        if (!encontradoC) {
          alert("No se encontraron datos para ese país, energia o año.");
        }
      });
    } else {
      alert("Por favor, completa todos los campos antes de enviar.");
    }
  });

//? document
//?   .getElementById("enviar-btn-consumo")
//?   .addEventListener("click", function () {
//?     const pais = dropdownsConsumo.pais.value;
//?     const energia = dropdownsConsumo.energia.value;
//?     const anio = dropdownsConsumo.anio.value;
//?
//?     if (pais && energia && anio) {
//?       document.getElementById("anio-seleccionado-consumo").textContent = anio;
//?       document.getElementById("pais-seleccionado-consumo").textContent = pais;
//?       document.getElementById("energia-generada-consumo").textContent = energia;
//?     } else {
//?       alert("Por favor, completa todos los campos antes de enviar.");
//?     }
//?   });

// SLIDER. Este código muestra cómo se puede utilizar un slider para mostrar imágenes en la página de energía renovable.

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});

//
