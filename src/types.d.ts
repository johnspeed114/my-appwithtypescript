type Todo = {
    text: string;
    complete: boolean;
    id: string = uuidv4();
  };

  //for types of functions you need a new type of objects!!!

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
type DeleteButton = (idKey: Todo.id) => void;