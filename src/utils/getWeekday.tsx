export default function getWeekday(timestamp: number, timezone: string) {
    const date = new Date(timestamp * 1000)
    return date.toLocaleString('de-DE', {hour12: false, weekday: "long",  timeZone: timezone })
}

/* returns the Weekday of the given timestamp in German */