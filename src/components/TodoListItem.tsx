import React from 'react';
//this ./../ allows to be imported from the parent directory. HOWEVER, we don't need it since we have declaration files on typescript
import './TodoListItem.css';

interface TodoListItemProps {
	todo: Todo;
}
//this {todo} destructuring usually with prop would just need to have todo be data types in the interface EASY LIKE!
export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({ todo }) => {
	return (
		<li>
			<label className={todo.complete ? 'complete' : undefined}>
				<input type="checkbox" checked={todo.complete} />
				{todo.text}
			</label>
		</li>
	);
};
