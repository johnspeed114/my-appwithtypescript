import React, { useState } from 'react';
import { TodoListItem } from './components/TodoListItem';

const initialTodos = [ { text: 'Walk the dog', complete: true }, { text: 'Take a name', complete: false } ];

const App: React.FC = () => {
	const [ todos, setTodos ] = useState(initialTodos);

	const toggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete
				};
			} else {
				return todo;
			}
		});
		setTodos(newTodos);
		console.log(newTodos);
	};
	return (
		<React.Fragment>
			<TodoListItem todo={todos[0]} />
			<TodoListItem todo={todos[1]} />
		</React.Fragment>
	);
};

export default App;
