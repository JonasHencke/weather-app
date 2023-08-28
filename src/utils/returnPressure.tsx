export default function returnPressure(pressure: number) {
    if( pressure <= 955) {
        return "Orkantief 🌪️"
    } else if ( pressure <= 980 ) {
        return "Sturmtief 🌪️"
    } else if ( pressure <= 1000) {
        return 'ausgewachsenes "Tief" ⬇️'
    } else if ( pressure <= 1013) {
        return "Tiefdruck ⬇️"
    } else if ( pressure <= 1025) {
        return "Hochdruck ⬆️"
    } else if (pressure > 1025) {
        return 'kräftiges "Hoch"'
    }
}