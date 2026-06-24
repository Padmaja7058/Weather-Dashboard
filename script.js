async function getWeather() {

    let city = document.getElementById("cityInput").value;

    let weatherBox = document.getElementById("weatherBox");

    if(city === ""){
        weatherBox.innerHTML = "Please enter city name";
        return;
    }

    try {

        let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`;

        let response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        let data = await response.json();

        weatherBox.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p> Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch(error) {

        weatherBox.innerHTML =
        `<p style="color:red;">${error.message}</p>`;
    }
}
