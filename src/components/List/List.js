import React, { Component } from "react";

class List extends Component {
	onClick = event => {
		axios
			.post("https://leboncoin-api.herokuapp.com/api/user/sign_up", {
				name: this.state.valueInput1
			})
			.catch(err => {
				console.log(err);
			});
		event.preventDefault();
	};
	render() {
		return <div />;
	}
}

export default List;
