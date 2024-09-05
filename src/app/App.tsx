import TodoProvider from 'src/core/todos/contexts/todoContext';
import { getAllTodos } from 'src/core/todos/services/todo-service';
import TodoPage from 'src/pages/TodoPage';
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
