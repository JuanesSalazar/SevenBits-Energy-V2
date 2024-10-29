google.charts.load("current", { packages: ["corechart"] });

google.charts.setOnLoadCallback(loadFullPie);

function loadFullPie() {
  // Inicializar el mapa
  drawPie();
  // Configurar el selector de año
  const yearSelector = document.getElementById("year_select");
  yearSelector.addEventListener("change", drawPie);
}

function columnaAño(selectedYear) {
  letter = "B";
  switch (selectedYear) {
    case 0:
      letter = "B";
      break;
    case 2021:
      letter = "B";
      break;
    case 2020:
      letter = "C";
      break;
    case 2019:
      letter = "D";
      break;
    case 2018:
      letter = "E";
      break;
    case 2017:
      letter = "F";
      break;
    case 2016:
      letter = "G";
      break;
    case 2015:
      letter = "H";
      break;
    case 2014:
      letter = "I";
      break;
    case 2013:
      letter = "J";
      break;
    case 2012:
      letter = "K";
      break;
    case 2011:
      letter = "L";
      break;
    case 2010:
      letter = "M";
      break;
    case 2009:
      letter = "N";
      break;
    case 2008:
      letter = "O";
      break;
    case 2007:
      letter = "P";
      break;
    case 2006:
      letter = "Q";
      break;
    case 2005:
      letter = "R";
      break;
    case 2004:
      letter = "S";
      break;
    case 2003:
      letter = "T";
      break;
    case 2002:
      letter = "U";
      break;
    case 2001:
      letter = "V";
      break;
    case 2000:
      letter = "W";
      break;
    case 1999:
      letter = "X";
      break;
    case 1998:
      letter = "Y";
      break;
    case 1997:
      letter = "Z";
      break;
    case 1996:
      letter = "AA";
      break;
    case 1995:
      letter = "AB";
      break;
    case 1994:
      letter = "AC";
      break;
    case 1993:
      letter = "AD";
      break;
    case 1992:
      letter = "AE";
      break;
    case 1991:
      letter = "AF";
      break;
    case 1990:
      letter = "AG";
      break;
    case 1989:
      letter = "AH";
      break;
    case 1988:
      letter = "AI";
      break;
    case 1987:
      letter = "AJ";
      break;
    case 1986:
      letter = "AK";
      break;
    case 1985:
      letter = "AL";
      break;
    case 1984:
      letter = "AM";
      break;
    case 1983:
      letter = "AN";
      break;
    case 1982:
      letter = "AO";
      break;
    case 1981:
      letter = "AP";
      break;
    case 1980:
      letter = "AQ";
      break;
    case 1979:
      letter = "AR";
      break;
    case 1978:
      letter = "AS";
      break;
    case 1977:
      letter = "AT";
      break;
    case 1976:
      letter = "AU";
      break;
    case 1975:
      letter = "AV";
      break;
    case 1974:
      letter = "AW";
      break;
    case 1973:
      letter = "AX";
      break;
    case 1972:
      letter = "AY";
      break;
    case 1971:
      letter = "AZ";
      break;
    case 1970:
      letter = "BA";
      break;
    case 1969:
      letter = "BB";
      break;
    case 1968:
      letter = "BC";
      break;
    case 1967:
      letter = "BD";
      break;
    case 1966:
      letter = "BE";
      break;
    case 1965:
      letter = "BF";
      break;
    default:
      letter = "B";
  }
  return letter; // Retorna el valor de letter al final de la función
}

function drawPie() {
  const yearSelector = document.getElementById("year_select");
  const selectedYear = parseInt(yearSelector.value); //.value entrega el valor del HTML
  const letter = columnaAño(selectedYear);
  // Construir el queryString usando la letra que representa el año seleccionado
  const queryPie = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/1qgCxfs-W4XoH7p-loBzIL4p0ZILHR_-jVYBujzxZuV8/gviz/tq?gid=0&headers=1&tq=SELECT%20A%2C%20" +
      letter
  );

  const queryPieC = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/1J5N1Hm0UYCZGb9kJWg_GhURI4bfVJk_hwMaYZs3W9ag/gviz/tq?gid=0&headers=1&tq=SELECT%20A%2C%20" +
      letter
  );

  console.log("vamos bien");

  queryPieC.send(handleQueryResponsePieC);
  queryPie.send(handleQueryResponsePie); // Envía el query
}

function handleQueryResponsePie(response) {
  if (response.isError()) {
    alert(
      "Error en la consulta: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
    return; //depuracion de errores
  }

  const dataPie = response.getDataTable(); // tabla

  const yearSelector = document.getElementById("year_select");
  const optionsPie = {
    height: 350,
    title: "Año " + yearSelector.value,
    titleTextStyle: {
      color: "white",
      fontSize: 21,
    },
    fontSize: 15,
    TextStyle: { color: "white" },
    pieSliceTextStyle: { color: "white" }, // For pie slice labels
    legend: "none",
    is3D: true,
    backgroundColor: "#273c27",
    chartArea: { top: 70, width: "100%", height: "150%" },
    tooltipTextStyle: { color: "black" },
  }; // optiones y cofiguracion del grafico

  const chartPie = new google.visualization.PieChart(
    document.getElementById("pie_global")
  ); // creal objeto del grafico y lo coloca en el div con su respectivo id

  //* tmb vease chart.draw(dataPie,optionsPie)
  chartPie.draw(dataPie, optionsPie); // dibuja el grafico segun indicaciones entre mas opciones

  console.log("ah sido ejecutado pie2");
}

function handleQueryResponsePieC(response) {
  if (response.isError()) {
    alert(
      "Error en la consulta: " +
        response.getMessage() +
        " " +
        response.getDetailedMessage()
    );
    return; //depuracion de errores
  }

  const dataPieC = response.getDataTable(); // tabla

  const yearSelector = document.getElementById("year_select");
  const optionsPieC = {
    height: 350,
    title: "Año " + yearSelector.value,
    titleTextStyle: {
      color: "#273c27",
      fontSize: 21,
    },
    fontSize: 15,
    is3D: true,
    chartArea: { top: 70, width: "60%", height: "60%" },
  }; // optiones y cofiguracion del grafico

  const chartPieC = new google.visualization.PieChart(
    document.getElementById("consume_pie")
  ); // creal objeto del grafico y lo coloca en el div con su respectivo id

  //* tmb vease chart.draw(dataPieC,optionsPieC)
  chartPieC.draw(dataPieC, optionsPieC); // dibuja el grafico segun indicaciones entre mas opciones

  console.log("ah sido ejecutado pie1");
}
