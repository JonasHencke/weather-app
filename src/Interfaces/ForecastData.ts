export interface ForecastDataInterface {
    current:         Current;
    daily:           Daily[];
    hourly:          Current[];
    lat:             number;
    lon:             number;
    timezone:        string;
    timezone_offset: number;
   }
   
   export interface Current {
    clouds:     number;
    dew_point:  number;
    dt:         number;
    feels_like: number;
    humidity:   number;
    pop?:       number;
    pressure:   number;
    sunrise?:   number;
    sunset?:    number;
    temp:       number;
    uvi:        number;
    visibility: number;
    weather:    Weather[];
    wind_deg:   number;
    wind_gust:  number;
    wind_speed: number;
   }
   
   export interface Weather {
    description: Description;
    icon:        Icon;
    id:          number;
    main:        Main;
   }
   
   export enum Description {
    Bedeckt = "Bedeckt",
    EinPaarWolken = "Ein paar Wolken",
    KlarerHimmel = "Klarer Himmel",
    LeichterRegen = "Leichter Regen",
   }
   
   export enum Icon {
    The01D = "01d",
    The01N = "01n",
    The02D = "02d",
    The04D = "04d",
    The04N = "04n",
    The10D = "10d",
   }
   
   export enum Main {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain",
   }
   
   export interface Daily {
    clouds:     number;
    dew_point:  number;
    dt:         number;
    feels_like: FeelsLike;
    humidity:   number;
    moon_phase: number;
    moonrise:   number;
    moonset:    number;
    pop:        number;
    pressure:   number;
    rain?:      number;
    sunrise:    number;
    sunset:     number;
    temp:       Temp;
    uvi:        number;
    weather:    Weather[];
    wind_deg:   number;
    wind_gust:  number;
    wind_speed: number;
   }
   
   export interface FeelsLike {
    day:   number;
    eve:   number;
    morn:  number;
    night: number;
   }
   
   export interface Temp {
    day:   number;
    eve:   number;
    max:   number;
    min:   number;
    morn:  number;
    night: number;
   }
   