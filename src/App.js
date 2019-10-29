import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
	// you will need a place to store your state in this component.
	constructor() {
		super();
		this.state = {
			list: []
		};
	}

	addItem = todo => {
		const newTodo = {
			task: todo,
			id: Date.now(),
			completed: false
		};
		this.setState({
			list: [...this.state.list, newTodo]
		});
		// console.log(this.state.list);
	};

	toggleDone = id => {
		this.setState({
			list: this.state.list.map(item => {
				if (item.id === id) {
					console.log(item.id, id);
					return { ...item, completed: !item.completed };
				} else {
					return item;
				}
			})
		});
	};

	clearCompleted = () => {
		this.setState({
			list: this.state.list.filter (item => {
				return item.completed === false
			})
		});
	};

	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<div className="App">
					<TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
					{/* <TodoForm addItem={this.addItem} /> */}
					<TodoList list={this.state.list} toggleDone={this.toggleDone} />
					{/* <TodoList groceries={this.state.groceries} /> */}
				</div>
			</div>
		);
	}
}

export default App;
