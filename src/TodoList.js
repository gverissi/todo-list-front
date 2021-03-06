import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {

	return (
		<ul>
			{
				todos && todos.length > 0 ?
					(
						todos.map(todo => {
							return (
								<li key={todo.id} onClick={() => deleteTodo(todo.id)}>{todo.todo}</li>
								// <li key={todo._id} onClick={() => deleteTodo(todo._id)}>{todo.action}</li>
							)
						})
					)
					:
					(
						<li>No todo(s) left</li>
					)
			}
		</ul>
	)
}

export default TodoList