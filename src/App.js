import React, { Component } from "react";
import "./App.css";
import List from "./components/List/List";
import axios from "axios";

class App extends Component {
	state = {
		valueInput1: ""
	};
	handleChange = event => {
		const target = event.target;
		const name = target.name;
		// Utile si le formulaire contient des éléments "checkbox"
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({ [name]: value });
	};
	onSubmit = event => {
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
		return (
			<div className="App">
				<h1>To-Do List</h1>
				<List />
				<form>
					<input
						type="text"
						name="valueInput1"
						placeholder="Nom de votre nouvelle tâche"
						value={this.state.valueInput1}
						onChange={this.handleChange}
					/>
					<button type="submit">Ajouter la nouvelle tâche</button>
				</form>
			</div>
		);
	}
}

export default App;
