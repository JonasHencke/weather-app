export default async function getLocation(city: string) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=04d4d495e39f2311c4acd1148b6e2130`);
    const location = await response.json();
      return location
 }