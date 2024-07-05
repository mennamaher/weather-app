let todayName = document.getElementById("today-name");
let todayNumber = document.getElementById("today-num");
let todayMonth = document.getElementById("today-month");
let todayLocation = document.getElementById("today-location");
let todayTemp = document.getElementById("today-temp");
let todayImg = document.getElementById("today-img");
let todayTxt = document.getElementById("today-txt");
let humatidy = document.getElementById("humatidy");
let wind = document.getElementById("wind");
let direction = document.getElementById("direction");


let nextDayName = document.getElementsByClassName("nextDay-name");
let nextMaxTemp = document.getElementsByClassName("nextDay-max-temp");
let nextMinTemp = document.getElementsByClassName("nextDay-min-temp");
let nextImg = document.getElementsByClassName("nextDay-img");
let nextTxt = document.getElementsByClassName("nextDay-txt");

let searchInput = document.getElementById("search");


let date = new Date()




async function getData(city){

    var Response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f00c6e3c7cda41049ef225602241106&q=${city}07112&days=37`)
    let Data = await Response.json()

    // console.log(Data)
    return Data;

}

searchInput.addEventListener("input", function(){

    collection(searchInput.value)
})

function displayData(data){

    let todayDate = new Date();
    todayName.innerHTML = todayDate.toLocaleDateString("en-US",{weekday:"long"})
    todayNumber.innerHTML = todayDate.getDate()
    todayMonth.innerHTML = todayDate.toLocaleDateString("en-US",{month:"long"})
    todayLocation.innerHTML= data.location.name
    todayTemp.innerHTML = data.current.temp_c
    todayImg.setAttribute("src",data.current.condition.icon)
    todayImg.innerHTML= data.current.condition.icon
    todayTxt.innerHTML = data.current.condition.text
    humatidy.innerHTML = data.current.humidity+"%"
    wind.innerHTML = data.current.wind_kph+"km/h"
    direction.innerHTML = data.current.wind_dir

}

function displayNextData(data){

    for(let i=0; i<2; i++){

        let nextDate = new Date(data.forecast.forecastday[i+1].date)
        nextDayName[i].innerHTML = nextDate.toLocaleDateString("en-US",{weekday:"long"})

        nextMaxTemp[i].innerHTML = data.forecast.forecastday[i+1].day.maxtemp_c;
        nextMinTemp[i].innerHTML = data.forecast.forecastday[i+1].day.mintemp_c;
        nextImg[i].setAttribute("src",data.forecast.forecastday[i+1].day.condition.icon);
        nextTxt[i].innerHTML = data.forecast.forecastday[i+1].day.condition.text;
    }

}


async function collection(cityy="cairo"){
    let weatherData = await getData(cityy);

    displayData(weatherData)
    displayNextData(weatherData)
    
}

collection();









// function displayNextData(data){
//     // let forecastData = data.forecast.forecastday;

//     for(let i=0; i<2; i++){

//         let nextDate = new Date(data.forecast.forecastday[i+1].date)
//         nextDayName.innerHTML = nextDate.toLocaleDateString("en-US",{weekday:"long"})

//         nextMaxTemp[i].innerHTML = data.forecast.forecastday[i+1].day.maxtemp_c;
//         nextMinTemp[i].innerHTML = data.forecast.forecastday[i+1].day.mintemp_c;
//         nextImg[i].setAttribute("src",data.forecast.forecastday[i+1].day.condition.icon);
//         nextTxt[i].innerHTML = data.forecast.forecastday[i+1].day.condition.text;
//     }

// }



