import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterAction from '../store/redux/counter_action.js';
import * as resultAction from '../store/redux/result_action.js';

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
		this.props.counterAction.increase();
	}
	descreaseCounter = () => {
		if (this.state.stored) {
			this.setState({
				stored: 0
			})
		}
		this.props.counterAction.decrease();
	}
	plusTenCounter = () => {
		if (this.state.stored) {
			this.setState({
				stored: 0
			})
		}
		this.props.counterAction.add(10);
	}
	subtractFiveCounter = () => {
		if (this.state.stored) {
			this.setState({
				stored: 0
			})
		}
		this.props.counterAction.subtract(5);
	}
	multiplyTwoCounter = () => {
		if (this.state.stored) {
			this.setState({
				stored: 0
			})
		}
		this.props.counterAction.multiply(2);
	}
	storeResult = (value) => {
		if (!this.state.stored) {
			this.setState({
				stored: 1
			})
		}
		this.props.resultAction.addItem(value);
	}
	deleteItem = (index) => {
		this.props.resultAction.delItem(index);
	}

	render() {
		return (
			<center>
				<p className={'counter'}>{this.props.counter}</p>
				<button onClick={() => this.increaseCounter()}>Increase</button>
				<button onClick={() => this.descreaseCounter()}>Descrease</button>
				<button onClick={() => this.plusTenCounter()}>Plus 10</button>
				<button onClick={() => this.subtractFiveCounter()}>Subtract 5</button>
				<button onClick={() => this.multiplyTwoCounter()}>Multiply 2</button>
				<button onClick={() => this.storeResult(this.props.counter)} disabled={this.state.stored ? true : false}>Store Result</button>
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
	// increaseCounter: () => dispatch(counterAction.increase()),
	// descreaseCounter: () => dispatch(counterAction.decrease()),
	// plusTenCounter: () => dispatch(counterAction.add(10)),
	counterAction: bindActionCreators(counterAction, dispatch),
	//storeResult: (value) => dispatch(resultAction.addItem(value)),
	//deleteItem: (index) => dispatch(resultAction.delItem(index))
	resultAction: bindActionCreators(resultAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);