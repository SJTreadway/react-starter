import React from 'react';
import ReactDOM from 'react-dom';

import List from './List.component';

var App = React.createClass({
	getInitialState() {
		return {
			foo: [
				{name: 'steven'},
				{name: 'fred'}
			],
			bar: 'thing'
		}
	},
	handleClick() {
		this.setState({
			foo: this.state.foo.concat([this.state.foo.length + 1])
		})
	},
	render() {
		return (
			<div>
				<div onClick={this.handleClick}>Foo</div>
				<List users={this.state.foo}></List>
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById("app"));
