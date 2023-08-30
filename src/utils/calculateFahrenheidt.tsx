export default function calculateFahrenheit(kelvin: number) {
    return Math.floor((kelvin - 273.15) * (9 / 5) + 32) + "°F"
}