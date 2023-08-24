export default async function getWeather(city: string) {
    const response = await fetch(`api-adress`);
    const weather = await response.json();
    console.log(weather)
 }