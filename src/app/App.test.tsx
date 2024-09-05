import { render } from '@testing-library/react';
import App from "./App"
import { Todo } from '../core/todos/models/todo';
import { getAllTodos } from '../core/todos/services/todo-service';


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

jest.mock('../core/todos/services/todo-service');

const mockGetAllTodos = jest.mocked(getAllTodos);

describe('App', () => {

  it('should render the app', async () => {
    mockGetAllTodos.mockResolvedValue(mockTodos);
    
    const { container } = render(await App());

    expect(container).toMatchSnapshot();
  })
})

