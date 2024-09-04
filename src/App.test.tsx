import { render, screen, waitFor } from '@testing-library/react';
import App from "./App"
import { getAllTodos } from './features/todos/services/todo-service';

jest.mock('./features/todos/services/todo-service');

const mockGetAllTodos = jest.mocked(getAllTodos).mockResolvedValue([]);

describe('App', () => {

  it('should render the app', async () => {
    mockGetAllTodos.mockResolvedValue([]);
    
    render(await App());
  
    await waitFor(() => expect(screen.getByText(/Write something/i)).toBeInTheDocument());
  })
})

