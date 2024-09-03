'use client';

import { Todo } from '../models/todo'
import clsx from 'clsx';
import { useTodoContext } from '../hooks/useTodoContext';

type TodoItemProps = Todo & { isPending: boolean };

export default function TodoItem({ id, title, completed, isPending }: TodoItemProps) {

  const { deleteTodo } = useTodoContext();

  const handleDeleteTodoClick = async () => {
    await deleteTodo(id);
  }

  return (
    <div className='todo-item-container'>
      <p className={clsx('todo-item-title', completed && 'todo-item-title-completed')}>{title} {isPending && <span className='todo-item-title-sending'>(Recording in progress...)</span>}
      </p>
      {!isPending && <button className="todo-item-delete-btn" onClick={handleDeleteTodoClick}>X</button>}
    </div>
  )
}
