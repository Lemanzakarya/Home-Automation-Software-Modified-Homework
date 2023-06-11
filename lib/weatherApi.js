const url = `https://api.open-meteo.com/v1/forecast?latitude=36.92&longitude=30.70&hourly=temperature_2m&current_weather=true&forecast_days=1`;

const getTodaysWeather = async () => {
    
    const data = await fetch(url);
    const object = await data.json();

    return object.current_weather;

}

export default getTodaysWeather;