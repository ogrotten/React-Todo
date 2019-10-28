import React from "react";

const TodoList = props => {
	return (
		<div>
			{props.list.map(item => (
				<div key={item.id} item={item.task}>
					{item.task}
				</div>
			))}
		</div>
	);
};

export default TodoList;