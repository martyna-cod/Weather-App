import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

const apiKey = '06a088a05e4ccfdf6cfbc69fe4a1c262'

export default class App extends Component {
	state = {
    value: '',
    date: "",
    cityName: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: false
	};

	handleInput = event => {
		this.setState({
      value: event.target.value
    });
  };
  
  handleCitySubmit = event => {
    event.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${apiKey}
    `
  
  fetch(API)
  .then(res => {
    if(res.ok) {
      return res
    }
    throw Error("Did not work out")
  })
  .then(res => res.json())
  .then(data => {
    const time= new Date().toLocaleString()
      this.setState(state => ({
        error: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: state.value,
      }))
  })
  .catch(err => {
    console.log(err)
    this.setState(state => ({
      error: true,
      city: this.state.value
    }))
  })
}
  
	render() {
		return (
			<div>
				<div className="header">Weather App</div>
        <Form 
        value={this.state.value}
        change={this.handleInput}
        submit={this.handleCitySubmit} />
        <Result weather={this.state}
        />
			
			</div>
		);
	} }