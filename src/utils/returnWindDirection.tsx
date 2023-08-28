export default function returnWindDirection(windDegree: number) {
    if (windDegree < 24) {
        return "Nord"
    } else if (windDegree < 69) {
        return "Nordost"
    } else if (windDegree < 114) {
        return "Ost"
    } else if (windDegree < 159) {
        return "Südost"
    } else if (windDegree < 205) {
        return "Süd"
    } else if (windDegree < 250) {
        return "Südwest"
    } else if (windDegree < 295) {
        return "West"
    } else if (windDegree < 361) {
        return "Nord"
    }
}