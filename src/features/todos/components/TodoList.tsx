'use client';

import { useTodoContext } from '../hooks/useTodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {

  const { todos, deleteTodo } = useTodoContext();

  return (
    <div className="todo-list-container">
      {todos.map((t) => <TodoItem key={t.id} onDeleteTodo={deleteTodo} {...t}  />)}
    </div>
  )
}
