export default async function getCityImage(city: string) {
    const response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`);
    const images = await response.json();
    return images
 }