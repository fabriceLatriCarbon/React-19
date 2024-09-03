import './App.css'
import TodoApp from './features/todos/components/TodoApp'
import TodoProvider from './features/todos/contexts/todoContext';
import { getAllTodos } from './features/todos/services/todo-service';


async function App() {
  const todos = await getAllTodos();

  return (
    <TodoProvider todos={todos} >
      <TodoApp />
    </TodoProvider>
  )
}

export default App
