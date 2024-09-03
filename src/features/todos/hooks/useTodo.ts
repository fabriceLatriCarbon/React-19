
import { useOptimistic, useState } from "react"

import { addNewTodo as addNewTodoServerAction, createTodoFactory, deleteTodo as deleteTodoServerAction, getTodoHighOrder } from "../services/todo-service"
import { Todo } from "../models/todo"; 

function addOptimisticTodo(todos: Todo[], newTodoTitle: string): Todo[] {
    const lastOrder = getTodoHighOrder(todos);

    return [...todos, createTodoFactory(lastOrder, newTodoTitle)];
}

export default function useTodo(todosProps: Todo[]) {
  
  const [todos, setTodos] = useState<Todo[]>(todosProps);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos, addOptimisticTodo);
  
  async function addNewTodo(formData: FormData): Promise<void> {
    const title = formData.get('todo-input');
    
    if (!title || typeof title !== 'string') throw new Error('todo-input must be a string');
    
    setOptimisticTodos(title);

    const newTodo = await addNewTodoServerAction(title);

    setTodos([...todos, newTodo]);
  }

  async function deleteTodo(id: string): Promise<void> {
    const deletedId = await deleteTodoServerAction(id);
    
    setTodos((previousTodos) => previousTodos.filter((t) => t.id !== deletedId ));
  }  

  return {
    todos: optimisticTodos,
    addNewTodo,
    deleteTodo
  }
}
