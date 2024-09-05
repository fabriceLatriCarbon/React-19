import TodoProvider from '../core/todos/contexts/todoContext';
import { getAllTodos } from '../core/todos/services/todo-service';
import TodoPage from '../pages/TodoPage';
import './App.css'


async function App() {
  const todos = await getAllTodos();

  return (
    <TodoProvider todos={todos} >
      <TodoPage />
    </TodoProvider>
  )
}

export default App
