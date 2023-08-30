import calculateCelsius from "./calculateCelsius";
import calculateFahrenheit from "./calculateFahrenheidt";

export default function calculateTemperature(unitState: string, Kelvin: number) {
    if (unitState == "Celsius") {
        return calculateCelsius(Kelvin)
    } else if (unitState == "Fahrenheit") {
        return calculateFahrenheit(Kelvin)
    }
}