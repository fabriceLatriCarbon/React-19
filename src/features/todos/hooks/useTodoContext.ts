import { useContext } from "react";
import { TodosContext } from "../contexts/todoContext";


export function useTodoContext() {
  const todoContext = useContext(TodosContext);

  if (!todoContext) {
    throw new Error('a todo context must be provided !');
  }

  return todoContext;
}