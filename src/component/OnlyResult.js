import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnlyResult extends Component {
	state = {
		show: false
	}

	sumResult = () => {
		this.props.sumResult(this.props.result);
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
	sumResult: (result) => dispatch({type: 'TOTAL_RESULT', data: result})
})

export default connect(mapStateToProps, mapDispatchToProps)(OnlyResult);