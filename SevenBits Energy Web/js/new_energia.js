//       *****************************  PÁGINA DE ENERGÍA RENOVABLE   *****************************

//! Esta es una version de mi codigo hecho por gpt, mas eficiente y ahorrando algunas lineas

google.charts.load("current", { packages: ["corechart", "line"] });

//       *****************************  Gestor de Ventana PopUp y grafico incluido  *****************************

// Configuración base para todos los gráficos
const BASE_CHART_OPTIONS = {
  height: 350,
  fontSize: 20,
  selectionMode: "multiple",
  hAxis: { title: "Año" },
  vAxis: { title: "TWh" },
};

// Mapeo de configuraciones específicas por tipo de energía
const ENERGY_CONFIGS = {
  "solar-card": {
    url: "https://docs.google.com/spreadsheets/d/1V7JrHfZm393C9cTROn1oXdzkQF-aEh_aJ5-DmDxmguc",
    offset: 25,
    title: "Producción de energía Solar",
  },
  "eolica-card": {
    url: "https://docs.google.com/spreadsheets/d/1TqkvqbQIslSd1CCvJL6zBVVvA25Md4bLQKoCOb2Zh5E",
    offset: 25,
    title: "Producción de energía Eólica",
  },
  "biomasa-card": {
    url: "https://docs.google.com/spreadsheets/d/1i4TAi_5Z7w0CRTtFhSCL8g6xAsfL_rwuVHQkjDaEkq8",
    offset: 0,
    title: "Producción de energía de Biomasas",
  },
  "geotermica-card": {
    url: "https://docs.google.com/spreadsheets/d/1SoOM2ZbR6fM0aqzswv8-F6oZI2x2OfajDtyLFsTXmmM",
    offset: 0,
    title: "Capacidad de energía Geotérmica",
    vAxis: { title: "Capacidad" }, // Override específico para geotérmica
  },
  "hidroeléctrica-card": {
    url: "https://docs.google.com/spreadsheets/d/1kMsCHZOu2HJ8TAMytBAqzq9JsQY7eFWrV8_vrp91ANI",
    offset: 25,
    title: "Producción de energía Hidroeléctrica",
  },
};

class EnergyPopupManager {
  constructor() {
    this.popover = document.getElementById("my-popover");
    this.overlay = document.getElementById("overlay");
    this.closeButton = document.getElementById("close-button");
    this.chartContainer = document.getElementById("graf_energy_type");

    this.initializeEventListeners();
  }

  initializeEventListeners() {
    // Manejadores para cerrar
    const hidePopover = () => {
      this.popover.style.display = "none";
      this.overlay.style.display = "none";
      this.chartContainer.innerHTML = "";
    };

    this.closeButton.addEventListener("click", hidePopover);
    this.overlay.addEventListener("click", hidePopover);

    // Manejador para las tarjetas de energía
    document.querySelectorAll(".energy-card").forEach((card) => {
      card.addEventListener("click", () => {
        this.showEnergyChart(card.id);
      });
    });
  }

  showEnergyChart(cardId) {
    const config = ENERGY_CONFIGS[cardId] || ENERGY_CONFIGS["eolica-card"];

    // Mostrar popup
    this.popover.style.display = "block";
    this.overlay.style.display = "block";

    // Construir y ejecutar la query
    const queryString = encodeURIComponent(
      `SELECT A, B, C, D, E, F OFFSET ${config.offset}`
    );

    const queryUrl = `${config.url}/gviz/tq?gid=0&headers=1&tq=${queryString}`;

    const query = new google.visualization.Query(queryUrl);

    query.send((response) => this.handleQueryResponse(response, config));
  }

  handleQueryResponse(response, config) {
    if (response.isError()) {
      console.error(
        "Error en la consulta:",
        response.getMessage(),
        response.getDetailedMessage()
      );
      return;
    }

    // Combinar opciones base con configuración específica
    const chartOptions = {
      ...BASE_CHART_OPTIONS,
      ...config,
      vAxis: { ...BASE_CHART_OPTIONS.vAxis, ...config.vAxis },
    };

    const chart = new google.charts.Line(this.chartContainer);
    chart.draw(
      response.getDataTable(),
      google.charts.Line.convertOptions(chartOptions)
    );
  }
}

//       *****************************  Gestor de Consultas   *****************************
//! Pendiente mejorar la eficiencia de este codigo para que sea una sola funccion segun la seeccion (consumo/produccion)

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
            document.getElementById("twh-produccion").innerHTML =
              produccion.toFixed(2);
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
            document.getElementById("twh-consumo").innerHTML =
              consumo.toFixed(2);
            document.getElementById("energia-generada-consumo").innerHTML =
              energySelectC;

            if (consumo > 0) {
              document.getElementById("casas-equivalente-consumo").innerHTML = (
                (parseFloat(consumo) / 3650) *
                10000
              ).toFixed(2); // Calcula el consumo en millones de casas
            } else {
              document.getElementById(
                "casas-equivalente-consumo"
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

//       *****************************  Resto del codigo   *****************************

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

//? *********************************************************************************************************

// Inicializar cuando el documento esté listo
document.addEventListener("DOMContentLoaded", () => {
  new EnergyPopupManager();
});
