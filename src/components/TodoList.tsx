import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
    todos: Array<Todo>
    toggleTodo: ToggleTodo;
    handleRemove: deleteButton;
}


export const TodoList: React.FunctionComponent<TodoListProps> = ({todos, toggleTodo, handleRemove}) => {
    return <ul>
        {todos.map(todo => {
            return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} handleRemove={handleRemove} />
        })}
    </ul>
}