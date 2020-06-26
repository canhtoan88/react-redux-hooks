import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as totalAction from '../store/redux/total_action.js';

class OnlyResult extends Component {
	state = {
		show: false
	}

	sumResult = () => {
		this.props.totalAction(this.props.result);
		this.setState({
			show: true
		})
	}

	render() {
		return (
			<div>
				<ul style={{marginBottom: 10}}>
					{this.props.result.map((value, index) => (<li key={index}>{value}</li>))}
				</ul>
				<button onClick={() => this.sumResult()} disabled={this.state.show ? true : false}>Calculate Sum result</button>
				{this.state.show && <p>{this.props.total}</p>}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	result: state.result.result,
	total: state.total.total
});

const mapDispatchToProps = dispatch => ({
	totalAction: result => dispatch(totalAction.sumResult(result))
})

export default connect(mapStateToProps, mapDispatchToProps)(OnlyResult);