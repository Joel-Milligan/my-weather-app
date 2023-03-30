import { LatLng } from 'react-native-maps';

// TODO - Put in environment variable and destroy this key
const API_KEY = 'e14ad821e04586bf9eed099d0e74da52';

export async function fetchWeather(latLong: LatLng) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLong.latitude}&lon=${latLong.longitude}&units=metric&appid=${API_KEY}`,
    );

    return response.json();
  } catch (e: unknown) {
    throw new Error(`Error fetching weather data for ${latLong}. Error: ${e}`);
  }
}
