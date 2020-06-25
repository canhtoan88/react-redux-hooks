import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

	state = {
		stored: 0,
		counter: 0,
		result: []
	}

	increaseCounter = () => {
		if (this.state.stored) {
			this.setState({
				stored: 0
			})
		}
		this.props.increaseCounter();
	}
	descreaseCounter = () => {
		if (this.state.stored) {
			this.setState({
				stored: 0
			})
		}
		this.props.descreaseCounter();
	}
	plusTenCounter = () => {
		if (this.state.stored) {
			this.setState({
				stored: 0
			})
		}
		this.props.plusTenCounter();
	}
	storeResult = (value) => {
		if (!this.state.stored) {
			this.setState({
				stored: 1
			})
		}
		this.props.storeResult(value);
	}
	deleteItem = (index) => {
		this.props.deleteItem(index);
	}

	render() {
		return (
			<center>
				{this.props.counter} <br/>
				<button onClick={() => this.increaseCounter()}>Increase</button>
				<button onClick={() => this.descreaseCounter()}>Descrease</button>
				<button onClick={() => this.plusTenCounter()}>Plus 10</button>
				<button onClick={() => this.storeResult(this.props.counter)} disabled={this.state.stored ? 'disabled' : false}>Store Result</button>
				<hr/>
				<ul>
					{this.props.result.map((value, index) => (
						<li key={index} onClick={() => this.deleteItem(index)}>{value}</li>
					))}
				</ul>
			</center>
		);
	}
}

const mapStateToProps = state => ({
	counter: state.counter.counter,
	result: state.result.result
})
const mapDispatchToProps = dispatch => ({
	increaseCounter: () => dispatch({type: 'INC_COUNTER'}),
	descreaseCounter: () => dispatch({type: 'DES_COUNTER'}),
	plusTenCounter: () => dispatch({type: 'ADD_COUNTER', value: 10}),
	storeResult: (value) => dispatch({type: 'ADD_ITEM', value: value}),
	deleteItem: (index) => dispatch({type: 'DEL_ITEM', index: index})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);