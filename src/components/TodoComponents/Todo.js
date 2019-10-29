import React from "react";



const Todo = props => {
	return (
		<div>
			{props.list.map(item => (
				<p onClick={() => props.toggleDone(item.id)} key={item.id} item={item.task} className={item.completed ? "cross" : null}>
					{item.task}
				</p>
			))}
		</div>
	);
};

export default Todo;
