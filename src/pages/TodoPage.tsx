import { useTodoContext } from 'src/core/todos/hooks/useTodoContext';
import TodoButton from '../ui/buttons/TodoButton';
import TodoInput from '../features/todos/addTodo/components/TodoInput';
import TodoList from '../features/todos/getTodos/components/TodoList';

export default function TodoPage() {

  const { addNewTodo, errorMessage, isPending } = useTodoContext();

  return (
    <>
      {errorMessage && !isPending && <p className=''>{errorMessage}</p>}
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
