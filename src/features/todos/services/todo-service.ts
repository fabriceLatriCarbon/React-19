import { SERVER_TIMEOUT_DELAY } from "../../../core/http-client/constants";
import { getHttpClient } from "../../../core/http-client";
import { IHttpClient } from "../../../core/http-client/contracts";
import { AddNewTodoRequest } from "../models/DTOs/requests/add-new-todo";
import { AddNewTodoResponse } from "../models/DTOs/responses/add-new-todo";
import { DeleteTodoResponse } from "../models/DTOs/responses/delete-todo";
import { GetAllTodosResponse } from "../models/DTOs/responses/get-all-todos";
import { Todo } from "../models/todo";
import { ApiRoutes } from "./APIs/routes";

export async function getAllTodos(): Promise<Todo[]> {
  const httpClient: IHttpClient = getHttpClient();

  if (!httpClient) throw new Error('httpClient must be provided');

  const todos = (await httpClient.get<GetAllTodosResponse>(ApiRoutes.GET_TODOS)).todos;

  return todos;
}

export async function addNewTodo(title: string): Promise<Todo> {
  'use server';
  
  return new Promise((resolve) => {
    setTimeout(async () => {
      const httpClient: IHttpClient = getHttpClient();
    
      if (!httpClient) throw new Error('httpClient must be provided');
    
      const newTodo = (await httpClient.post<AddNewTodoResponse, AddNewTodoRequest>(ApiRoutes.ADD_NEW_TODO, { title })).todo;
    
      resolve(newTodo);
    }, SERVER_TIMEOUT_DELAY);
  })
}

export async function deleteTodo(id: string): Promise<string> {
  'use server';
  const httpClient: IHttpClient = getHttpClient();

  if (!httpClient) throw new Error('httpClient must be provided');

  return (await httpClient.delete<DeleteTodoResponse>(ApiRoutes.DELETE_TODO, { todoId: id })).id
}

export function getTodoHighOrder(todos: Todo[]): number {
  return todos.toSorted((ta, tb) => ta.order < tb.order ? 1 : -1).at(0)?.order ?? 0;
}


export function createTodoFactory(order: number, title: string): Todo {
  return { id:Date.now().toString(), order: order + 1, title, completed: false }
}