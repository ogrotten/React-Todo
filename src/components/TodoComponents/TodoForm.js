import React from "react";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newTodo: "",
		};
	}

	handleChange = e => {
		this.setState({
			newTodo: e.target.value
		})
	}

	handleSubmit = e => {
		// console.log(this.state);
		e.preventDefault();
		this.props.addItem(this.state.newTodo)
		this.setState({ newTodo: "" })  // clear the form after submission!
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="todo">
					NewTodo
					<input type="text" name="todo" id="todo" value={this.state.newTodo} onChange={this.handleChange} />
				</label>
			</form>
		);
	}
} 

export default TodoForm;
