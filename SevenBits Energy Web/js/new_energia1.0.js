//       *****************************  PÁGINA DE ENERGÍA RENOVABLE   *****************************

google.charts.load("current", { packages: ["corechart", "line"] });

//       *****************************  SoftDrops y Arrays de uso  *****************************

//?      *****************************  Arrays  *****************************

const objContryP_es_en = {
  Afghanistan: "Afganistán",
  Albania: "Albania",
  Germany: "Alemania",
  Angola: "Angola",
  "Antigua and Barbuda": "Antigua y Barbuda",
  "Saudi Arabia": "Arabia Saudita",
  Algeria: "Argelia",
  Argentina: "Argentina",
  Armenia: "Armenia",
  Aruba: "Aruba",
  Australia: "Australia",
  Austria: "Austria",
  Azerbaijan: "Azerbaiyán",
  Bahamas: "Bahamas",
  Bangladesh: "Bangladés",
  Barbados: "Barbados",
  Bahrain: "Baréin",
  Belgium: "Bélgica",
  Belize: "Belice",
  Benin: "Benín",
  Bermuda: "Bermudas",
  Belarus: "Bielorrusia",
  Bolivia: "Bolivia",
  "Bosnia and Herzegovina": "Bosnia y Herzegovina",
  Botswana: "Botsuana",
  Brazil: "Brasil",
  Brunei: "Brunéi",
  Bulgaria: "Bulgaria",
  "Burkina Faso": "Burkina Faso",
  Burundi: "Burundi",
  Bhutan: "Bután",
  "Cape Verde": "Cabo Verde",
  Cambodia: "Camboya",
  Cameroon: "Camerún",
  Canada: "Canadá",
  Qatar: "Catar",
  Chad: "Chad",
  Chile: "Chile",
  China: "China",
  Cyprus: "Chipre",
  Colombia: "Colombia",
  Comoros: "Comoras",
  Congo: "Congo",
  "North Korea": "Corea del Norte",
  "South Korea": "Corea del Sur",
  "Cote d'Ivoire": "Costa de Marfil",
  "Costa Rica": "Costa Rica",
  Croatia: "Croacia",
  Cuba: "Cuba",
  Denmark: "Dinamarca",
  Dominica: "Dominica",
  Ecuador: "Ecuador",
  Egypt: "Egipto",
  "El Salvador": "El Salvador",
  "United Arab Emirates": "Emiratos Árabes Unidos",
  Eritrea: "Eritrea",
  Slovakia: "Eslovaquia",
  Slovenia: "Eslovenia",
  Spain: "España",
  "United States": "Estados Unidos",
  Estonia: "Estonia",
  Eswatini: "Esuatini",
  Ethiopia: "Etiopía",
  Philippines: "Filipinas",
  Finland: "Finlandia",
  Fiji: "Fiyi",
  France: "Francia",
  Gabon: "Gabón",
  Gambia: "Gambia",
  Georgia: "Georgia",
  Ghana: "Ghana",
  Gibraltar: "Gibraltar",
  Grenada: "Granada",
  Greece: "Grecia",
  Greenland: "Groenlandia",
  Guadeloupe: "Guadalupe",
  Guam: "Guam",
  Guatemala: "Guatemala",
  "French Guiana": "Guayana Francesa",
  "Equatorial Guinea": "Guinea Ecuatorial",
  Guinea: "Guinea",
  "Guinea-Bissau": "Guinea-Bisáu",
  Guyana: "Guyana",
  Haiti: "Haití",
  Honduras: "Honduras",
  "Hong Kong": "Hong Kong",
  Hungary: "Hungría",
  India: "India",
  Indonesia: "Indonesia",
  Iraq: "Irak",
  Iran: "Irán",
  Ireland: "Irlanda",
  Iceland: "Islandia",
  "Cayman Islands": "Islas Caimán",
  "Cook Islands": "Islas Cook",
  "Faeroe Islands": "Islas Feroe",
  "Falkland Islands": "Islas Malvinas",
  "Solomon Islands": "Islas Salomón",
  "Turks and Caicos Islands": "Islas Turcas y Caicos",
  "British Virgin Islands": "Islas Vírgenes Británicas",
  "United States Virgin Islands": "Islas Vírgenes de los Estados Unidos",
  Israel: "Israel",
  Italy: "Italia",
  Jamaica: "Jamaica",
  Japan: "Japón",
  Jordan: "Jordania",
  Kazakhstan: "Kazajistán",
  Kenya: "Kenia",
  Kyrgyzstan: "Kirguistán",
  Kiribati: "Kiribati",
  Kosovo: "Kosovo",
  Kuwait: "Kuwait",
  Laos: "Laos",
  Lesotho: "Lesoto",
  Latvia: "Letonia",
  Lebanon: "Líbano",
  Liberia: "Liberia",
  Libya: "Libia",
  Lithuania: "Lituania",
  Luxembourg: "Luxemburgo",
  Macao: "Macao",
  "North Macedonia": "Macedonia del Norte",
  Madagascar: "Madagascar",
  Malaysia: "Malasia",
  Malawi: "Malaui",
  Maldives: "Maldivas",
  Mali: "Malí",
  Malta: "Malta",
  Morocco: "Marruecos",
  Martinique: "Martinica",
  Mauritius: "Mauricio",
  Mauritania: "Mauritania",
  Mexico: "México",
  Moldova: "Moldavia",
  Mongolia: "Mongolia",
  Montenegro: "Montenegro",
  Montserrat: "Montserrat",
  Mozambique: "Mozambique",
  Myanmar: "Myanmar",
  Namibia: "Namibia",
  Nauru: "Nauru",
  Nepal: "Nepal",
  Nicaragua: "Nicaragua",
  Niger: "Níger",
  Nigeria: "Nigeria",
  Niue: "Niue",
  Norway: "Noruega",
  "New Caledonia": "Nueva Caledonia",
  "New Zealand": "Nueva Zelanda",
  Oman: "Omán",
  Netherlands: "Países Bajos",
  Pakistan: "Pakistán",
  Palestine: "Palestina",
  Panama: "Panamá",
  "Papua New Guinea": "Papúa Nueva Guinea",
  Paraguay: "Paraguay",
  Peru: "Perú",
  "French Polynesia": "Polinesia Francesa",
  Poland: "Polonia",
  Portugal: "Portugal",
  "Puerto Rico": "Puerto Rico",
  "United Kingdom": "Reino Unido",
  Czechia: "República Checa",
  "Democratic Republic of Congo": "República Democrática del Congo",
  "Dominican Republic": "República Dominicana",
  Reunion: "Reunión",
  Rwanda: "Ruanda",
  Romania: "Rumanía",
  Russia: "Rusia",
  "Western Sahara": "Sáhara Occidental",
  Samoa: "Samoa",
  "Saint Kitts and Nevis": "San Cristóbal y Nieves",
  "Saint Pierre and Miquelon": "San Pedro y Miquelón",
  "Saint Vincent and the Grenadines": "San Vicente y las Granadinas",
  "Saint Helena": "Santa Elena",
  "Saint Lucia": "Santa Lucía",
  "Sao Tome and Principe": "Santo Tomé y Príncipe",
  Senegal: "Senegal",
  Serbia: "Serbia",
  Seychelles: "Seychelles",
  "Sierra Leone": "Sierra Leona",
  Singapore: "Singapur",
  Syria: "Siria",
  Somalia: "Somalia",
  "Sri Lanka": "Sri Lanka",
  Sudan: "Sudán",
  Sweden: "Suecia",
  Switzerland: "Suiza",
  Suriname: "Surinam",
  Thailand: "Tailandia",
  Taiwan: "Taiwán",
  Tanzania: "Tanzania",
  Tajikistan: "Tayikistán",
  Timor: "Timor Oriental",
  Togo: "Togo",
  Tonga: "Tonga",
  "Trinidad and Tobago": "Trinidad y Tobago",
  Tunisia: "Túnez",
  Turkmenistan: "Turkmenistán",
  Turkey: "Turquía",
  Ukraine: "Ucrania",
  Uganda: "Uganda",
  USSR: "URSS",
  Uruguay: "Uruguay",
  Uzbekistan: "Uzbekistán",
  Vanuatu: "Vanuatu",
  Venezuela: "Venezuela",
  Vietnam: "Vietnam",
  Yemen: "Yemen",
  Djibouti: "Yibuti",
  Zambia: "Zambia",
  Zimbabwe: "Zimbabue",
};

const objCountryC_es_en = {
  Germany: "Alemania",
  "Saudi Arabia": "Arabia Saudita",
  Algeria: "Argelia",
  Argentina: "Argentina",
  Australia: "Australia",
  Austria: "Austria",
  Azerbaijan: "Azerbaiyán",
  Bangladesh: "Bangladesh",
  Belgium: "Bélgica",
  Belarus: "Bielorrusia",
  Brazil: "Brasil",
  Bulgaria: "Bulgaria",
  Canada: "Canadá",
  Qatar: "Catar",
  Chile: "Chile",
  China: "China",
  Cyprus: "Chipre",
  Colombia: "Colombia",
  "South Korea": "Corea del Sur",
  Croatia: "Croacia",
  Denmark: "Dinamarca",
  Ecuador: "Ecuador",
  Egypt: "Egipto",
  "United Arab Emirates": "Emiratos Árabes Unidos",
  Slovakia: "Eslovaquia",
  Slovenia: "Eslovenia",
  Spain: "España",
  "United States": "Estados Unidos",
  Estonia: "Estonia",
  Philippines: "Filipinas",
  Finland: "Finlandia",
  France: "Francia",
  Greece: "Grecia",
  "Hong Kong": "Hong Kong",
  Hungary: "Hungría",
  India: "India",
  Indonesia: "Indonesia",
  Iraq: "Irak",
  Iran: "Irán",
  Ireland: "Irlanda",
  Iceland: "Islandia",
  Israel: "Israel",
  Italy: "Italia",
  Japan: "Japón",
  Kazakhstan: "Kazajistán",
  Kuwait: "Kuwait",
  Latvia: "Letonia",
  Lithuania: "Lituania",
  Luxembourg: "Luxemburgo",
  Malaysia: "Malasia",
  Morocco: "Marruecos",
  Mexico: "México",
  Norway: "Noruega",
  "New Zealand": "Nueva Zelanda",
  Oman: "Omán",
  Netherlands: "Países Bajos",
  Pakistan: "Pakistán",
  Peru: "Perú",
  Poland: "Polonia",
  Portugal: "Portugal",
  "United Kingdom": "Reino Unido",
  Czechia: "República Checa",
  Romania: "Rumania",
  Russia: "Rusia",
  Singapore: "Singapur",
  "Sri Lanka": "Sri Lanka",
  Sweden: "Suecia",
  Switzerland: "Suiza",
  Thailand: "Tailandia",
  Taiwan: "Taiwán",
  "Trinidad and Tobago": "Trinidad y Tobago",
  Turkmenistan: "Turkmenistán",
  Turkey: "Turquía",
  Ukraine: "Ucrania",
  USSR: "URSS",
  Uzbekistan: "Uzbekistán",
  Venezuela: "Venezuela",
  Vietnam: "Vietnam",
};

const objCountryP_count = {
  2022: 27,
  2021: 207,
  2020: 209,
  2019: 209,
  2018: 209,
  2017: 209,
  2016: 209,
  2015: 209,
  2014: 209,
  2013: 209,
  2012: 209,
  2011: 211,
  2010: 211,
  2009: 211,
  2008: 211,
  2007: 211,
  2006: 211,
  2005: 211,
  2004: 210,
  2003: 210,
  2002: 209,
  2001: 209,
  2000: 209,
  1999: 81,
  1998: 81,
  1997: 81,
  1996: 81,
  1995: 81,
  1994: 81,
  1993: 81,
  1992: 81,
  1991: 81,
  1990: 81,
  1989: 75,
  1988: 75,
  1987: 75,
  1986: 75,
  1985: 75,
  1984: 66,
  1983: 66,
  1982: 66,
  1981: 66,
  1980: 66,
  1979: 66,
  1978: 66,
  1977: 66,
  1976: 66,
  1975: 66,
  1974: 66,
  1973: 66,
  1972: 66,
  1971: 66,
  1970: 65,
  1969: 65,
  1968: 65,
  1967: 65,
  1966: 65,
  1965: 65,
};

const objCountryC_count = {
  2021: 77,
  2020: 77,
  2019: 77,
  2018: 77,
  2017: 77,
  2016: 77,
  2015: 77,
  2014: 77,
  2013: 77,
  2012: 77,
  2011: 77,
  2010: 77,
  2009: 77,
  2008: 77,
  2007: 77,
  2006: 77,
  2005: 77,
  2004: 77,
  2003: 77,
  2002: 77,
  2001: 77,
  2000: 77,
  1999: 77,
  1998: 77,
  1997: 77,
  1996: 77,
  1995: 77,
  1994: 77,
  1993: 77,
  1992: 77,
  1991: 77,
  1990: 77,
  1989: 75,
  1988: 75,
  1987: 75,
  1986: 75,
  1985: 75,
  1984: 66,
  1983: 66,
  1982: 66,
  1981: 66,
  1980: 66,
  1979: 66,
  1978: 66,
  1977: 66,
  1976: 66,
  1975: 66,
  1974: 66,
  1973: 66,
  1972: 66,
  1971: 66,
  1970: 65,
  1969: 65,
  1968: 65,
  1967: 65,
  1966: 65,
  1965: 65,
};

const objTypeEnergy = {
  4: "Solar",
  2: "Eolica",
  5: "Biomasa",
  3: "Hidroelectrica",
};

const objYear = [];
for (let year = 2022; year >= 1965; year--) {
  objYear.push(year);
}

//?      *****************************  DropDowns  *****************************

function rellenarDropdownYear(elemento, opciones) {
  opciones.forEach((opcion) => {
    let opcionElemento = document.createElement("option");
    opcionElemento.value = opcion;
    opcionElemento.textContent = opcion;
    elemento.appendChild(opcionElemento);
  });
}

function rellenarDropdown(elemento, opciones) {
  Object.entries(opciones).forEach(([value, text]) => {
    let opcionElemento = document.createElement("option");
    opcionElemento.value = value; // Nombre en inglés como value
    opcionElemento.textContent = text; // Nombre en español como contenido
    elemento.appendChild(opcionElemento);
  });
}

// Selección de dropdowns en ambas secciones
const dropdownsProduccion = {
  opcionesPais: document.getElementById("pais-produccion"),
  opcionesEnergia: document.getElementById("energia-produccion"),
  opcionesAnio: document.getElementById("anio-produccion"),
};
const dropdownsConsumo = {
  opcionesPais: document.getElementById("pais-consumo"),
  opcionesEnergia: document.getElementById("energia-consumo"),
  opcionesAnio: document.getElementById("anio-consumo"),
};

// Rellenar dropdowns de producción
rellenarDropdown(dropdownsProduccion.opcionesPais, objContryP_es_en);
rellenarDropdown(dropdownsProduccion.opcionesEnergia, objTypeEnergy);
rellenarDropdownYear(dropdownsProduccion.opcionesAnio, objYear);

// Rellenar dropdowns de consumo
rellenarDropdown(dropdownsConsumo.opcionesPais, objCountryC_es_en);
rellenarDropdown(dropdownsConsumo.opcionesEnergia, objTypeEnergy);
rellenarDropdownYear(dropdownsConsumo.opcionesAnio, objYear);

// Rellenar dropdowns de años, países y tipos de energía

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
        this.showEnergyChart(card.getAttribute("Card"));
      });
    });

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.showEnergyChart(card.getAttribute("Card"));
      });
    });
  }

  showEnergyChart(cardId) {
    const config = ENERGY_CONFIGS[cardId] || ENERGY_CONFIGS["eolica-card"];

    console.log(cardId);
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
//! Pendiente hacer una sola funcion...

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
      // Link viejo sin filtrar subregiones: https://docs.google.com/spreadsheets/d/1E5XXPUeseX9K5t-QInf1LhnZyajAWBC0g5f7fIKYa3I
      const queryConsultaProduccion = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/18l-TWdIjyF__ZLzFN_2sMPcb1tDfMoZmmP3oJgHyIzI/gviz/tq?gid=0&headers=1&tq=" +
          queryStringConsultaProduccion
      );

      console.log(
        "https://docs.google.com/spreadsheets/d/18l-TWdIjyF__ZLzFN_2sMPcb1tDfMoZmmP3oJgHyIzI/gviz/tq?gid=0&headers=1&tq=" +
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
              produccion.toFixed(3);
            document.getElementById("energia-generada-produccion").innerHTML =
              energySelectP;

            //? ********************* Generar Ranking ******************

            const topCountriesP = getTopCountries(
              data,
              parseInt(yearP),
              energyP,
              10,
              objCountryP_count
            );

            createRankingList(
              traduccion(topCountriesP, objContryP_es_en),
              "ranking-produccion"
            );

            // Validacion por si no funciona el ranking
            //!  logYearData(data, parseInt(yearP), objCountryP_count, energyP);

            // Para verificar un valor específico si sospechas de alguna fila en particular:
            //!  checkValue(
            //!    data,
            //!    getStartingRow(parseInt(yearP), objCountryP_count),
            //!    energyP
            //!  );

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
      // Link viejo sin filtrar subregiones: https://docs.google.com/spreadsheets/d/1FTQaf0B1teJqkrg2vtmOef3NJbwf3JdoqFgh_jiSYxM
      const queryConsultaConsumo = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/1GXkgF6lAeiVwOBz1uaH733PggqKdqcd9DI3utWm4JZ0/gviz/tq?gid=0&headers=1&tq=" +
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
              consumo.toFixed(3);
            document.getElementById("energia-generada-consumo").innerHTML =
              energySelectC;

            //? ********************* Generar Ranking ******************

            const topCountriesC = getTopCountries(
              data,
              parseInt(yearC),
              energyC,
              10,
              objCountryC_count
            );

            createRankingList(
              traduccion(topCountriesC, objCountryC_es_en),
              "ranking-consumo"
            );

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

// ************************************ Funciones del Ranking *************************************************

// Función para obtener los países con la mayor producción de energía
function getTopCountries(data, year, columnIndex, topN, array) {
  // Comprobar si el año existe en el array
  if (!array[year]) {
    console.log(`El año ${year} no está disponible en los datos.`);
    return [];
  }

  const countriesCount = array[year]; // Obtener la cantidad de países para el año
  const startingRow = getStartingRow(year, array); // Calcular la fila inicial

  console.log(
    `Año: ${year}, Fila inicial: ${startingRow}, Cantidad países: ${countriesCount}`
  );

  const filteredData = [];
  for (
    let i = startingRow;
    i < startingRow + countriesCount && i < data.getNumberOfRows();
    i++
  ) {
    if (data.getValue(i, 1) == year) {
      // Verificamos que el año coincida
      const value = data.getValue(i, columnIndex);
      // Solo agregamos valores válidos
      if (value !== null && value !== undefined && !isNaN(value)) {
        filteredData.push({
          country: data.getValue(i, 0),
          value: value,
        });
      }
    }
  }

  // Validación adicional para debugging
  if (filteredData.length === 0) {
    console.log(`No se encontraron datos válidos para el año ${year}.`);
    console.log(`Índice de columna: ${columnIndex}`);
    return [];
  }

  // Ordenar por valor y devolver los primeros N
  const sortedData = filteredData.sort((a, b) => b.value - a.value);
  return sortedData.slice(0, Math.min(topN, sortedData.length));
}

// Función para obtener la fila de inicio en función del año
function getStartingRow(year, array) {
  let totalCountries = 0;
  // Sumar la cantidad de países desde el año más reciente hasta el año deseado
  for (let y = 2022; y > year; y--) {
    if (array[y]) {
      totalCountries += array[y];
    }
  }
  return totalCountries;
}

//crea un div para el ranking
function createRankingList(data, idContainer) {
  const container = document.getElementById(idContainer);

  if (!container) {
    console.error("El elemento 'ranking-container' no existe en el DOM.");
    return;
  }

  container.innerHTML = ""; // Limpiar contenido anterior

  data.forEach((item, index) => {
    const entry = document.createElement("div");
    entry.textContent = `${index + 1}. ${item.country}: ${item.value.toFixed(
      3
    )} TWh`;
    entry.style.margin = "5px 0";
    entry.style.backgroundColor = "#fff";
    entry.style.color = "#273c2c";
    entry.style.borderRadius = "15px";
    entry.style.display = "block";
    entry.style.fontSize = "17px";
    //entry.style.marginBlockStart = "0.83em";
    //entry.style.scrollMarginBlockEnd = "0.83em";
    //entry.style.marginInlineStart = "0px";
    //entry.style.scrollMarginInlineEnd = "0px";
    entry.style.padding = "7px";
    entry.style.fontWeight = "bold";
    entry.style.unicodeBidi = "isolate";
    container.appendChild(entry);
  });
}

//* ************************** pasa el ranking a español ******************************
function traduccion(array, arrax) {
  return array.map((item) => ({
    country: arrax[item.country] || item.country,
    value: item.value,
  }));
}

//? **************** Validacion de datos del ranking *****************************
// Función principal de debugging que muestra información detallada
function logYearData(data, year, array, columnIndex) {
  const startingRow = getStartingRow(year, array);
  const countriesCount = array[year];

  console.log("==== DEBUGGING INFORMACIÓN DEL AÑO ====");
  console.log(`Año solicitado: ${year}`);
  console.log(`Fila inicial calculada: ${startingRow}`);
  console.log(`Cantidad de países según array: ${countriesCount}`);
  console.log(`Columna de energía solicitada: ${columnIndex}`);
  console.log("\n==== DATOS ENCONTRADOS ====");

  let validDataCount = 0;
  let invalidDataCount = 0;

  // Examinar las filas relevantes
  for (
    let i = startingRow;
    i < startingRow + countriesCount && i < data.getNumberOfRows();
    i++
  ) {
    const countryName = data.getValue(i, 0);
    const yearValue = data.getValue(i, 1);
    const energyValue = data.getValue(i, columnIndex);

    console.log(`\nFila ${i}:`);
    console.log(`- País: ${countryName}`);
    console.log(`- Año: ${yearValue}`);
    console.log(`- Valor de energía: ${energyValue}`);

    // Validar los datos
    if (yearValue == year) {
      if (
        energyValue !== null &&
        energyValue !== undefined &&
        !isNaN(energyValue)
      ) {
        validDataCount++;
        console.log("✓ Fila válida");
      } else {
        invalidDataCount++;
        console.log("⚠ Valor de energía no válido");
      }
    } else {
      console.log("⚠ Año no coincide");
    }
  }

  console.log("\n==== RESUMEN ====");
  console.log(`Total de datos válidos encontrados: ${validDataCount}`);
  console.log(`Total de datos inválidos: ${invalidDataCount}`);

  // Verificar la estructura de los datos
  console.log("\n==== VERIFICACIÓN DE ESTRUCTURA ====");
  if (data.getNumberOfColumns) {
    console.log(`Número total de columnas: ${data.getNumberOfColumns()}`);
    console.log(`Nombres de columnas disponibles:`);
    for (let i = 0; i < data.getNumberOfColumns(); i++) {
      console.log(`Columna ${i}: ${data.getColumnLabel(i)}`);
    }
  }
}

// Función auxiliar para verificar un valor específico
function checkValue(data, row, col) {
  const value = data.getValue(row, col);
  console.log(`\nVerificando valor en fila ${row}, columna ${col}:`);
  console.log(`- Valor: ${value}`);
  console.log(`- Tipo: ${typeof value}`);
  console.log(`- Es null: ${value === null}`);
  console.log(`- Es undefined: ${value === undefined}`);
  console.log(`- Es NaN: ${isNaN(value)}`);
  return value;
}

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
