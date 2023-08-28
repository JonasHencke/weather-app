export default function visibilityMessage(km: number) {
    if (km <= 0.01) {
        return "extremer Nebel, Schneetreiben"
    } else if (km <= 0.1) {
        return "dichter Nebel, Starkregen"
    } else if ( km <= 1) {
        return "mäßiger Nebel"
    } else if (km <= 2) {
        return "leichter Nebel"
    } else if (km <= 4) {
        return "diesig"
    } else if (km <= 10) {
        return "leicht diesig"
    } else if (km <= 20) {
        return "klare Sicht "
    } else if (km <= 50) {
        return "sehr klare Sicht"
    } else {
        return "außergewöhnlich klar"
    }
    
}