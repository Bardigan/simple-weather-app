import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { ChangeCountry } from '../actions/ChangeCountry';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term: '',      
    };
  }

  OnInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term,this.props.country);
    this.setState({ term: ''});
  }
    
  render(){
    return (
        <form className="searchBarForm" onSubmit={(event) =>this.onFormSubmit(event)}>
          <input 
          value={this.state.term}
          className="formInput"
          placeholder="Get a five-day forecast in a city of your choice"
          onChange={(event) =>this.OnInputChange(event)}
          />
          <button className="submitButton" type="submit">Submit</button>

          <div className="dropdown">
            <span>{this.props.country}</span>
            <div className="dropdown-content">
              <div onClick={()=>this.props.ChangeCountry('PL')}>PL</div>
              <div onClick={()=>this.props.ChangeCountry('NL')}>NL</div>
              <div onClick={()=>this.props.ChangeCountry('US')}>US</div>
            </div>
          </div>

        </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather,ChangeCountry}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    country: state.country
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);