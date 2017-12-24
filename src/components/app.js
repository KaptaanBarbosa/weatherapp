import React, { Component } from 'react';
import Searchbar from '../container/search_bar';
import WeatherList from '../container/weather_list'
export default class App extends Component {
  render() {
    return (
      <div>
      <Searchbar/>
      <WeatherList/>
      </div>
    );
  }
}
