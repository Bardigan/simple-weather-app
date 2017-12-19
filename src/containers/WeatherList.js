import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import { bindActionCreators } from 'redux';
import { DeleteAction } from '../actions/DeleteAction';

class WeatherList extends React.Component{

  renderWeather = (cityData,index) => {
    const temps = cityData.list.map(weather => weather.main.temp)
    const presusures = cityData.list.map(weather => weather.main.pressure)
    const humidites = cityData.list.map(weather => weather.main.humidity)
    return (
      <tr key={index}  className="dataRow">
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="orange" unit="°C"/></td>
        <td><Chart data={presusures} color="black" unit="hPa"/></td>
        <td><Chart data={humidites} color="blue" unit ="%"/></td>
        <td><button className="deleteButton" onClick={() => this.props.DeleteAction(index)}>X</button></td>
      </tr>
    );
  }
  render(){
    return (
      <table className="tableList">
        <thead>
          <tr>
            <th className="cityName">City</th>
            <th>temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}          
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { weather: state.weather }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({DeleteAction}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherList);
