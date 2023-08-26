export default async function getWeatherForecast(lon: number, lat: number) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=20f7632ffc2c022654e4093c6947b4f4&lang=de`);
    const weatherForecast = await response.json();
    return weatherForecast
 }