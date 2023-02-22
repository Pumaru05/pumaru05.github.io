//---------------------------------------------------------------------------------------------------------------------------------------------------------/* 
//|    Author: Ekaitz Zarraga.                                                                                                                              |
//|    Description: Ingeniero minero experto picando código para desarrollar software libre.                                                                |
//|    Código que ha picado: El que se muestra abajo.                                                                                                       |
//---------------------------------------------------------------------------------------------------------------------------------------------------------*/
//
const myURL = "https://api.open-meteo.com/v1/forecast?latitude=43.26&longitude=-2.93&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin";
/*-*/
const maxTempElement = document.querySelectorAll(".max-temp");
let responseObj;
/*-*/
(function Tiempo() {
    fetch (myURL)
    .then((response) => response.json())
    .then((data) => {
        responseObj = data
        MaxTemp();
        //Mi código
        DailyData();
        MinTemp();
        WeatherIcon();
        //Se termina mi código
        return responseObj;
    });
})();
/*Función para imprimir en pantalla temperatura máxima diaria.*/
function MaxTemp() {
    //Mi código
    for (let i = 0; i <= 3; i++) {
        //Código de Ekaitz
        maxTempElement[i].textContent = "Max: " + responseObj.daily.temperature_2m_max[i] + " Cº";
        //Se termina código de Ekaitz
    }
    //Se termina mi código
}
//
//---------------------------------------------------------------------------------------------------------------------------------------------------------/* 
//|    Author: Gorka Vecino.                                                                                                                                |
//|    Description: Compañero experto picando en CSS y JS y es majo.                                                                                        |
//|    Código que ha picado: El que se muestra abajo.                                                                                                       |
//---------------------------------------------------------------------------------------------------------------------------------------------------------*/
//
/*Función para imprimir en consola todos los datos metereológicos de la semana de una ciudad en concreto.*/
function F(){
    console.log(responseObj);
}
/*Función para imprimir en consola temperatura máxima diaria.*/
function A(){
    console.log(responseObj.daily.temperature_2m_max[0]);
}
/*-*/
function WeatherIcon () {
    let wmoObj = {
        code: i,
        description: "",
        icon: ""
    }
    switch (i) {
        case 0:
            wmoObj.description = "Clear Sky";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/2204/2204335.png";
            return wmoObj;
        case 1:
            wmoObj.description = "Mainly Clear";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/7865/7865955.png";
            return wmoObj;
        case 2:
            wmoObj.description = "Partly Cloudy";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/3222/3222808.png";
            return wmoObj;
        case 3:
            wmoObj.description = "Overcast";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/3750/3750201.png";
            return wmoObj;
        case 45:
            wmoObj.description = "Fog";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/1207/1207561.png";
            return wmoObj;
        case 48:
            wmoObj.description = "Depositing Rime Fog";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/2940/2940573.png";
            return wmoObj;
        case 51:
            wmoObj.description = "Drizzle Light";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/5113/5113614.png";
            return wmoObj;
        case 53:
            wmoObj.description = "Drizzle Moderate";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/6643/6643013.png";
            return wmoObj;
        case 55:
            wmoObj.description = "Drizzle Dense Intensity";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/7865/7865992.png";
            return wmoObj;
        case 56:
            wmoObj.description = "Freezing Drizzle Light";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/7587/7587458.png";
            return wmoObj;
        case 57:
            wmoObj.description = "Freezing Drizzle Dnese Intensity";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/7587/7587479.png";
            return wmoObj;
        case 61:
            wmoObj.description = "Rain Slight";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/2204/2204351.png";
            return wmoObj;
        case 63:
            wmoObj.description = "Rain Moderate";
            wmoObj.icon = "";
            return wmoObj;
        case 65:
            wmoObj.description = "Rain Heavy Intensity";
            wmoObj.icon = "";
            return wmoObj;
        case 66:
            wmoObj.description = "Freezing Rain Light";
            wmoObj.icon = "";
            return wmoObj;
        case 67:
            wmoObj.description = "Freezing Rain Heavy Intensity";
            wmoObj.icon = "";
            return wmoObj;
        case 71:
            wmoObj.description = "Snow Fall Slight";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/4051/4051422.png";
            return wmoObj;
        case 73:
            wmoObj.description = "Snow Fall Moderate";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/5417/5417117.png";
            return wmoObj;
        case 75:
            wmoObj.description = "Snow Fall Heavy Intensity";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/2076/2076879.png";
            return wmoObj;
        case 77:
            wmoObj.description = "Snow Grains";
            wmoObj.icon = "https://cdn-icons-png.flaticon.com/512/15/15167.png";
            return wmoObj;
        case 80:
            wmoObj.description = "Rain Shower Slight";
            wmoObj.icon = "";
            return wmoObj;
        case 81:
            wmoObj.description = "Rain Shower Moderate";
            wmoObj.icon = "";
            return wmoObj;
        case 82:
            wmoObj.description = "Rain Shower Violent";
            wmoObj.icon = "";
            return wmoObj;
        case 85:
            wmoObj.description = "Snow Shower Slight";
            wmoObj.icon = "";
            return wmoObj;
        case 86:
            wmoObj.description = "Snow Shower Heavy";
            wmoObj.icon = "";
            return wmoObj;
        case 95:
            wmoObj.description = "Thunderstorm Slight or Thunderstorm Moderate";
            wmoObj.icon = "";
            return wmoObj;
        case 96:
            wmoObj.description = "Thunderstorm Slight";
            wmoObj.icon = "";
            return wmoObj;
        case 97:
            wmoObj.description = "Thunderstorm Heavy Hail";
            wmoObj.icon = "";
            return wmoObj;
    }
}
/*---------------*/
//|  MI CÓDIGO   |
/*---------------*/
const fecha = document.querySelectorAll(".dia");
function DailyData() {
    for (let i = 0; i <= 3; i++) {
        fecha[i].textContent = responseObj.daily.time[i];
    }
}
/*-*/
function MinTemp() {
    const minTempElement = document.querySelectorAll(".min-temp");
    for (let i = 0; i <= 3; i++) {
        minTempElement[i].textContent = "Min: " + responseObj.daily.temperature_2m_min[i] + " Cº";
    }
}