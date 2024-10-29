google.charts.load("current", { packages: ["geochart"] });

//! si tuvieramos api key
// google.charts.load("current", {
//   packages: ["geochart"],
//   * Note: if your chart requires geocoding or uses nonstandard codes, you'll
//   * need to get a mapsApiKey for your project. The one below won't work.
//   * See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//   mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
// });

//! Revisar mas documentacion de metodos adicionales como selectChart(), draw(), clearChart()

google.charts.setOnLoadCallback(loadFull2); //llama un metodo cuando ya termine de cargar los paketes

async function loadFull2() {
  const loader = document.querySelector(".loader-image");
  loader.style.display = "block"; // Muestra el loader

  // Tu código de la API aquí

  drawRegionsMap(); // Llama a drawRegionsMap inicialmente
  const yearSelector = document.getElementById("year_select"); //llama una variable del selector
  yearSelector.addEventListener("change", drawRegionsMap); // Redibuja el mapa cuando cambie el selector
}

function generateQS(selectedYear) {
  let limit = 96;
  let offset = 0;

  //* 1965-1970 participan 90 paises
  //* se suma Bangadlesh
  //* 1971-1984 participan 91 paises
  //* 1985-1989 participan 100 paises
  //* se suman ...
  //* 1990-2020 participan 103 paises
  //* se suman Croatia, Slovenia, North Macedonia
  //* no registrados ...
  //* 2021 Redistrados 96 paises

  // se hacen condicionales para que segun el año tome un numero de registros(limit) y omita otro numero de registros(offset)
  if (selectedYear > 2020) {
    limit = 96;
    offset = 0;
  } else if (selectedYear == 2020) {
    limit = 103;
    offset = 96;
  } else if (selectedYear >= 1989) {
    limit = 103;
    offset = limit * (2020 - selectedYear) + 96;
  } else if (selectedYear >= 1984) {
    limit = 100;
    offset = limit * (1989 - selectedYear) + 31 * 103 + 96;
  } else if (selectedYear >= 1970) {
    limit = 91;
    offset = limit * (1984 - selectedYear) + 5 * 100 + 31 * 103 + 96;
  } else if (selectedYear > 1964) {
    limit = 90;
    offset = limit * (1970 - selectedYear) + 14 * 91 + 5 * 100 + 31 * 103 + 96;
  } else {
    // Notificación del navegador
    alert(selectedYear + " no válido, ingrese un año porfavor");
  }

  console.log(selectedYear); //* for depuration
  console.log(limit + " ," + offset); //* for depuration

  return { limit, offset }; // Devuelve un objeto con limit y offset
}

function drawRegionsMap() {
  const yearSelector = document.getElementById("year_select"); //lama el año selecciona mediante el ida
  const selectedYear = parseInt(yearSelector.value); //convierte el año a int
  const { limit, offset } = generateQS(selectedYear); // Llama a generateQS y desestructura el objeto

  // transforma caracteres espciales a url
  const queryString = encodeURIComponent(
    "SELECT A, D LIMIT " + limit + " OFFSET " + offset
  ); // modifica parte de la urle segun el rango indicado
  const query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/1egPUfJl7PGGJX4lyYXBV-nhIMvF0beY5s6LgwhlhZKc/gviz/tq?gid=0&headers=1&tq=" +
      queryString
  ); // agrega informacion al url

  console.log(queryString); // Para depuración

  query.send(handleQueryResponse); //envia el query
}

function handleQueryResponse(response) {
  if (response.isError()) {
    alert(
      "Error en la consulta: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
    return; //depuracion de errores
  }

  var data = response.getDataTable(); // tabla
  var options = {
    height: 400,
    colorAxis: {
      minValue: 0,
      colors: ["#caf3b3", "#4ac02b", "Green", "#0a6c10"],
    },
  }; // optiones y cofiguracion del grafico
  const chart = new google.visualization.GeoChart(
    document.getElementById("hot_map")
  ); // creal objeto del grafico y lo coloca en el div con su respectivo id
  //* tmb vease chart.draw(data,options)
  chart.draw(data, options); // dibuja el grafico segun indicaciones entre mas opciones
}

//  google.visualization.events.addListener(chart, "select", function () {
//    var selection = chart.getSelection();
//    console.log("Selected Region:", selection);
//  });

//  if (typeof queso === "function") {
//    // Verifica que esté disponible
//    mostrarMensaje(); // Llama a la función
//  } else {
//    console.error("La función mostrarMensaje no está disponible.");
//  }
//
//  function si() {
//    alert("si funciona");
//  }
