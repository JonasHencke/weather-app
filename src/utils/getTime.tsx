export default function getTime(timestamp: number, timezone: string) {
    const date = new Date(timestamp * 1000)
    return date.toLocaleString('de-DE', {hour12: false, timeZone: timezone }).slice(-8,-3)
}

/* returns the time of day of the given timestamp */