import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

export default class App extends Component {
	state = {
		value: ''
	};

	handleInput = event => {
		this.setState({
      value: event.target.value
    });
	};
	render() {
		return (
			<div>
				<div className="header">Weather App</div>
        <Form 
        value={this.state.value}
        change={this.handleInput} />
				{/*   <Result /> */}
			</div>
		);
	}
}
