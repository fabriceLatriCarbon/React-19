'use client';

import { useTodoContext } from '../../../../core/todos/hooks/useTodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {

  const { todos, isPending } = useTodoContext();

  return (
    <div className="todo-list-container">
      {todos.map((t, index) => <TodoItem key={t.id} {...t} isPending={todos.length === index + 1 ? isPending : false} />)}
    </div>
  )
}
