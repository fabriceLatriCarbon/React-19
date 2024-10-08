import { use } from "react";
import { TodosContext } from "../../../core/todos/contexts/todoContext";


export function useTodoContext() {
  const todoContext = use(TodosContext);

  if (!todoContext) {
    throw new Error('a todo context must be provided !');
  }

  return todoContext;
}