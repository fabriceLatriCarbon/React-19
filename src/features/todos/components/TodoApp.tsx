import { useTodoContext } from '../hooks/useTodoContext';
import TodoButton from './TodoButton';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function TodoApp() {

  const { addNewTodo } = useTodoContext();

  return (
    <>
      <form action={addNewTodo} className="todo-form-container">
        <div className="todo-form-main">
          <TodoInput />
          <TodoButton id="todo-form-submit-btn" style="todo-form-submit-btn">Add</TodoButton>
        </div>
      </form>
      <TodoList />
    </>
  )
}
