class WeatherService {
    async getExternalWeather() {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${CONFIG.API_KEY}&units=metric&lang=ar`
                );
                const data = await response.json();
                this.updateWeatherUI(data);
            } catch (error) {
                console.error('خطأ في جلب بيانات الطقس:', error);
            }
        });
    }

    updateWeatherUI(data) {
        document.getElementById('external-temp').textContent = data.main.temp.toFixed(1);
        document.getElementById('external-humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `${data.wind.speed} كم/س`;
    }
}