export default async function getLocation(city: string) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=20f7632ffc2c022654e4093c6947b4f4`);
    const weather = await response.json();
      return weather
 }