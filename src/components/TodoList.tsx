import React from 'react';
import { TodoListItem } from './TodoItem';

interface TodoListProps {
	todos: Array<Todo>;
	toggleTodo: ToggleTodo;
	handleRemove: DeleteButton;
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, toggleTodo, handleRemove }) => {
	return (
		<ul>
			{todos.map((todo) => {
				return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} handleRemove={handleRemove} />;
			})}
		</ul>
	);
};
