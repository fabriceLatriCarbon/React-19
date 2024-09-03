'use client';

export default function TodoInput() {
  return (
    <div className="todo-form-input-container">
      <label htmlFor='todo-input' className='todo-form-input-label'>Write something...</label>
      <input id="todo-input" className='todo-form-input-txt' name="todo-input" />
    </div>
  )
}
