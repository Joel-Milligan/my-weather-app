interface CloudCoverPercentage {
  all: number;
}
interface LatLon {
  lat: number;
  lon: number;
}

/**
 * main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * main.feels_like Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
 * main.humidity Humidity, %
 * main.temp_min Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * main.temp_max Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 * main.sea_level Atmospheric pressure on the sea level, hPa
 * main.grnd_level Atmospheric pressure on the ground level, hPa
 */
interface WeatherDetails {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

/**
 * sys.type Internal parameter
 * sys.id Internal parameter
 * sys.message Internal parameter
 * sys.country Country code (GB, JP etc.)
 * sys.sunrise Sunrise time, unix, UTC
 * sys.sunset Sunset time, unix, UTC
 */
interface SunInfo {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

/**
 * weather.id Weather condition id
 * weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
 * weather.description Weather condition within the group. You can get the output in your language. Learn more
 * weather.icon Weather icon id
 */
interface WeatherConditions {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface WindInfo {
  deg: number;
  speed: number;
}

export interface WeatherData {
  base: string;
  clouds: CloudCoverPercentage;
  /**
   * Internal number - we don't use it
   */
  cod: number;
  coord: LatLon;
  /**
   * Time of data calculation, unix, UTC
   */
  dt: number;
  /**
   * City Id
   */
  id: number;
  /**
   * City Name
   */
  name: string;
  main: WeatherDetails;
  sys: SunInfo;
  timezone: number;
  visibility: number;
  weather: WeatherConditions[];
  wind: WindInfo;
}
