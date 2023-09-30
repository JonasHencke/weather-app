export default async function getWeatherForecast(lon: number, lat: number) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=04d4d495e39f2311c4acd1148b6e2130&lang=de`);
    const weatherForecast = await response.json();
    return weatherForecast
 }