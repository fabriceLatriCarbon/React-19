import { createContext } from "react";
import type { Todo } from "../models/todo";
import useTodo from "../hooks/useTodo";



type TodoContext = {
  todos: Todo[];
  addNewTodo: (formData: FormData) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

type TodoProviderProps = React.PropsWithChildren & {
  todos: Todo[];
}

export const TodosContext = createContext<TodoContext | undefined>(undefined);

export default function TodoProvider({ todos: todosProps, children }: TodoProviderProps) {
  const todoContext = useTodo(todosProps);

  return (
    <TodosContext value={todoContext}>
      {children}
    </TodosContext>
  )
}