export default async function getWeather(city: string) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &APPID=20f7632ffc2c022654e4093c6947b4f4&lang=de`);
    const weather = await response.json();
    return weather
 }