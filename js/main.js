const apikey = "d91fe9ccb9f1ae62e93a11183dce4a7b" 

let city = "Berlin"
let icon
let iconId = `http://openweathermap.org/img/wn/01n.png`

//API by city name, units: metric
const url  = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`


//check weather API
const weather = (city) => {    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
}


//display weather 
const displayWeather = (data) => {
    const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity, feels_like, temp_min, temp_max} = data.main;
        const {speed} = data.wind;
        
        document.querySelector(".city").innerText = `Weather in ${name}`
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description[0].toUpperCase() + description.slice(1);
        document.querySelector(".temperature").innerText = `${temp.toFixed(1)} °C`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity} %`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
        document.querySelector(".feels").innerText = `Feels like ${feels_like.toFixed(1)} °C`
        document.querySelector(".min").innerText = `Temperature min: ${temp_min.toFixed(1)} °C`
        document.querySelector(".max").innerText = `Temperature max: ${temp_max.toFixed(1)} °C`
        document.querySelector(".none").classList.remove("none")
}

///search

const searchButton = document.querySelector(".search button")
console.log(searchButton)
const searchValue = document.querySelector(".search-bar")


const searchForCity = () => {
    searchValue.addEventListener("keyup", function(e) {
        if (e.key == "Enter") {
            city = searchValue.value;
            console.log(city)
            weather(city)
        }
    })   
}

searchForCity()



const search = () => {
    searchButton.addEventListener("click", function() {
    console.log("clicked")
    weather(searchValue.value)
    })
}

search()




