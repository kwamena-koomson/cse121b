const apiKey = 'b259ec1c04a2419784b102018241702';

// Function to fetch weather data
function fetchWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
            updateWeatherInfo(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function updateWeatherInfo(data) {
    
    const location = data.location.name + ', ' + data.location.region + ', ' + data.location.country;
    const temperature = data.current.temp_c + '°C';
    const description = data.current.condition.text;
    const windSpeed = data.current.wind_kph + ' km/h';
    
    
    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('description').textContent = description;
    document.getElementById('wind-speed').textContent = windSpeed;
}


function searchWeather() {
    const locationInput = document.getElementById('location-input').value;
    if (locationInput.trim() !== '') {
        fetchWeather(locationInput);
    } else {
        alert('Please enter a location');
    }
}

