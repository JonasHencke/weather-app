export default function sunprotectionMessage(Indexscore: number) {
    if (Indexscore < 3) {
        return "Kein Schutz notwendig 🙂"
    } else if (Indexscore < 6) {
        return "Schutz notwendig! 🧴"
    } else {
        return "Besonderer Schutz notwendig! 🧴"
    }
}