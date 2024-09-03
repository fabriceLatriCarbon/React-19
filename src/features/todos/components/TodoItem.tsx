'use client';

import { useFormStatus } from 'react-dom';
import { Todo } from '../models/todo'
import clsx from 'clsx';

type TodoItemProps = Todo & { 
  onDeleteTodo: (id: string) => Promise<void>
}

export default function TodoItem({ id, title, completed, onDeleteTodo }: TodoItemProps) {

  const { pending } = useFormStatus();

  const handleDeleteTodoClick = async () => {
    await onDeleteTodo(id);
  }

  return (
    <div className='todo-item-container'>
      <p className={clsx('todo-item-title', completed && 'todo-item-title-completed')}>{title} {pending && <span className='todo-item-title-sending'>(Enregistement en cours...)</span>}
      </p>
      {!pending && <button className="todo-item-delete-btn" onClick={handleDeleteTodoClick}>X</button>}
    </div>
  )
}
