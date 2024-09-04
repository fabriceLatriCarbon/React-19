import { render } from '@testing-library/react';
import App from "./App"
import { getAllTodos } from './features/todos/services/todo-service';
import { Todo } from './features/todos/models/todo';

const mockTodos: Todo[] = [
  {
    id: Date.now().toString(),
    order: 1,
    title: "First Test Todo",
    completed: false
  },
  {
    id: (Date.now() + 1).toString(),
    order: 2,
    title: "Second Test Todo",
    completed: false
  }
]

jest.mock('./features/todos/services/todo-service');

const mockGetAllTodos = jest.mocked(getAllTodos);

describe('App', () => {

  it('should render the app', async () => {
    mockGetAllTodos.mockResolvedValue(mockTodos);
    
    const { container } = render(await App());

    expect(container).toMatchSnapshot();
  })
})

