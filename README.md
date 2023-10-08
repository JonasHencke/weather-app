# Wetter-App
![](https://i.imgur.com/6xqRzrB.png)

## Beschreibung
In dieser React-Applikation ist es möglich sich das aktuelle Wetter für den gewünschten Standort anzeigen zu lassen.

Die Daten werden von einer API bezogen und in der Applikation dargestellt. Des Weiteren wird auch noch ein Bild der zugehörigen Stadt über eine weitere API angefragt und dargestellt, wenn diese für den Ort vorhanden ist. Der Benutzer hat die Möglichkeit bei der Darstellung die Temperatur-Einheiten Celsius und Fahrenheidt auszuwählen.
## Demo

Link zur [Live-Website](https://jonashencke.github.io/weather-app/) ▶️
<br/>
<br/>


https://github.com/JonasHencke/weather-app/assets/109872786/9d40e4be-0ae8-41fb-9daa-67104a43ffad


## Features
- responsive design für PC, Tablet und Smartphone
- intuitives User-Interface im Neumorphism-Stil
- Anzeige realer Wetter-Daten durch die openweathermap API
- Bild der Stadt wird angezeigt, wenn diese in der Datenbank der Teleport-API vorhanden ist
- Anzeige der Wetterdaten in Tagen/Stunden
- Anzeige der Temperaturen in Celsius/Fahrenheidt

## Verwendete Technologien
- Typescript
- React
- SASS
- Vite
- APIs:
   - OpenWeatherMap
   - Teleport 
- Context API (state management)
## Herangehensweise und Lernzuwachs
Bei diesem Projekt handelt es sich um das erste Projekt in welchem ich die Programmiersprache Typescript anwende. Ich wollte erneut ein Projekt mit API-Anbindung bauen, um meine Fähigkeiten in der Anfrage und Darstellung von APIs zu verbessern. Da Wetter-APIs in der kostenfreien Variante die großzügigste Anzahl an Anfragen bieten, entschied ich mich dafür eine Wetter-App zu programmieren. Neben der openweathermap API hatte ich noch den Wunsch, ein Bild von der jeweiligen Stadt abbilden zu können. Hierbei bin ich auf die Teleport-API gestoßen, welche glücklicherweise komplett kostenlos ist und eine Vielzahl an Bildern von Großstädten bietet. Um neben Typescript noch etwas anderes neues in mein Repertoire aufnehmen zu können, wählte ich für das Styling diesmal den CSS-Preprocessor SASS aus.

Die Folgenden Dinge habe ich aus dem Projekt mitgenommen:
- Praktische Anwendung der Programmiersprache Typescript
- Anbindung und Verkettung mehrerer API-Anfragen
- Darstellung der angefragten API-Daten auf der Webseite
- Anwendung des CSS Pre-Processors SASS
## Quellen
- die animierten SVGs stammen von dieser [Seite](https://www.amcharts.com/free-animated-svg-weather-icons/)
- [OpenWeathermap API](https://openweathermap.org/): Wetter-Daten
- [Teleport API](https://developers.teleport.org/api/getting_started/): Stadt-Bilder
