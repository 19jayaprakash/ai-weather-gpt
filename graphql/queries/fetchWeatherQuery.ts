import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
query MyQuery($current_weather: String, $daily: String, $hourly: String, $latitude: String, $longitude: String, $timezone: String){
  myQuery(current_weather: $current_weather, daily: $daily, hourly: $hourly, latitude: $latitude, longitude: $longitude, timezone: $timezone){
      current_weather{
          is_day
          temperature
          time
          weathercode
          winddirection
          windspeed
      }
      daily{
          temperature_2m_max
          time
          weathercode
      }
      daily_units{
          temperature_2m_max
          time
          weathercode
      }
      elevation
      generationtime_ms
      hourly{
          apparent_temperature
          dewpoint_2m
          precipitation_probability
          relativehumidity_2m
          temperature_2m
          time
          uv_index
          uv_index_clear_sky
      }
      hourly_units{
          apparent_temperature
          dewpoint_2m
          precipitation_probability
          relativehumidity_2m
          temperature_2m
          time
          uv_index
          uv_index_clear_sky
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
  }
}
`;

export default fetchWeatherQuery;
