import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import SelectedCountry from './SelectedCountry';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  country: SelectedCountry
});

export default rootReducer;
