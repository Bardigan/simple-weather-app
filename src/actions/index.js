import axios from 'axios';
const API_KEY ='ed63b726dbe622bc5e8dfbb6ca9ce89a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city,country) {

  if(city === '') {
    return {
      type: 'EMPTY_FIELD',
      payload: 'The input field is empty',
    }
  }
    const url = `${ROOT_URL}&q=${city},${country}`;
    
    return axios.get(url)
    .then(function(response){
      return {
        type: 'FETCH_WEATHER',
        payload: response,
      }
    })
    .catch(function (error) {
      return {
        type: 'NOT_FOUND'
      }
    });
}



