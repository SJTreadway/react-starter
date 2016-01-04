import React from "react";

var List = React.createClass({
	render() {
		return (
			<p>{this.props.users[0].name}</p>
		)
	}
});

export default List;