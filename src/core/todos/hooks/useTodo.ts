
import { useActionState, useOptimistic, useState } from "react"

import { addNewTodo as addNewTodoServerAction, createTodoFactory, deleteTodo as deleteTodoServerAction, getTodoHighOrder } from "../services/todo-service"
import { Todo } from "../models/todo"; 

function addOptimisticTodo(todos: Todo[], newTodoTitle: string): Todo[] {
    const lastOrder = getTodoHighOrder(todos);

    return [...todos, createTodoFactory(lastOrder, newTodoTitle)];
}


export default function useTodo(todosProps: Todo[]) {
  async function addNewTodoAction(_: string, formData: FormData): Promise<string> {    
    const title = formData.get('todo-input');
    
    if (!title || typeof title !== 'string') return 'todo-input must be a string';

    if (title.localeCompare('toto', undefined, { sensitivity: 'base' }) === 0) return `New todo title cannot be "${title}"`;
    
    setOptimisticTodos(title);

    const newTodo = await addNewTodoServerAction(title);

    setTodos([...todos, newTodo]);

    return '';
  }
  
  const [errorMessage, addNewTodo, pending] = useActionState(addNewTodoAction, '')
  const [todos, setTodos] = useState<Todo[]>(todosProps);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos, addOptimisticTodo);
  

  async function deleteTodo(id: string): Promise<void> {
    const deletedId = await deleteTodoServerAction(id);
    
    setTodos((previousTodos) => previousTodos.filter((t) => t.id !== deletedId ));
  }  

  return {
    todos: optimisticTodos,
    isPending: pending,
    errorMessage,
    addNewTodo,
    deleteTodo
  }
}
