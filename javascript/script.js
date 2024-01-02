const apiKey = "84198cb7c8696596f1d576bf91fe8582";
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(Url + city + `&appid=${apiKey}`);
    var data = await response.json();
       
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else{
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    // document.querySelector(".city").innerText = data.name;
    //     document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
    //     document.querySelector(".humidity").innerText = data.main.humidity + "%";
    //     document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    // if (data.weather[0].main == "Clouds") {
    //     weatherIcon.src = "images/clouds.png"
    // }
    // else if (data.weather[0].main == "Clear") {
    //     weatherIcon.src = "images/clear.png"
    // }
    // else if (data.weather[0].main == "Snow") {
    //     weatherIcon.src = "images/snow.png"
    // }
    // else if (data.weather[0].main == "Drizzle") {
    //     weatherIcon.src = "images/drizzle.png"
    // }
    // else if (data.weather[0].main == "Mist") {
    //     weatherIcon.src = "images/mist.png"
    // }
    // else if (data.weather[0].main == "Rain") {
    //     weatherIcon.src = "images/rain.png"
    // }

    // document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

