import React from "react";
import Todo from "./Todo"



const TodoList = props => {

	return (
		<div>
			<Todo list={props.list} toggleDone={props.toggleDone}/>
		</div>
	);
};

export default TodoList;