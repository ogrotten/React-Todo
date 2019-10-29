import React from "react";
import Todo from "./Todo"



const TodoList = props => {

	return (
		<div>
			<Todo list={props.list} toggleDone={props.toggleDone}/>
			{/* {props.list.map(item => (
				<div key={item.id} item={item.task}>
					{item.task}
				</div>
			))} */}
		</div>
	);
};

export default TodoList;