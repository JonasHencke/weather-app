import calculateCelsius from "./calculateCelsius";
import calculateFahrenheit from "./calculateFahrenheidt";

export default function calculateTemperature(unitState: string, Kelvin: number) {
    if (unitState == "Celsius") {
        calculateCelsius(Kelvin)
    } else if (unitState == "Fahrenheit") {
        calculateFahrenheit(Kelvin)
    }
}