import { Todo } from "../../todo";
import type { BaseResponse } from "../../../../../../core/todos/models/DTOs/responses/base-response";

export type GetAllTodosResponse = BaseResponse & {
  todos: Todo[];
}