import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { AddTodoHeading } from './components/AddTodoHeading';
import { TodoList } from './components/TodoList';

const initialTodos = [
	{ text: 'Walk the dog', complete: true, id: uuidv4() },
	{ text: 'Take a name', complete: false, id: uuidv4() }
];

const App: React.FC = () => {
	const [ todos, setTodos ] = useState(initialTodos);

	const toggleTodo: ToggleTodo = (selectedTodo) => {
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

	const addTodo: AddTodo = (newTodo) => {
		setTodos([ ...todos, { text: newTodo, complete: false, id: uuidv4() } ]);
	};

	const handleRemove: DeleteButton = (idKey) => {
		const newList = todos.filter((todo) => todo.id !== idKey);
		setTodos(newList);
	};

	return (
		<React.Fragment>
			<AddTodoHeading addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} handleRemove={handleRemove} />
		</React.Fragment>
	);
};

export default App;
