import React, { FormEvent, useState } from 'react';

interface AddTodoHeadingProps {
	addTodo: AddTodo;
}

export const AddTodoHeading: React.FunctionComponent<AddTodoHeadingProps> = ({ addTodo }) => {
	const [ newTodo, setNewTodo ] = useState(''); //this tag string guarantee that this is a string (typescript only!)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(event) => setNewTodo(event.target.value)}
				value={newTodo}
				placeholder="Please Enter The Todo Item"
			/>
		</form>
	);
};
