import { Todo } from "src/core/todos/models/todo";
import { BaseResponse } from "../../../../../../core/todos/models/DTOs/responses/base-response";


export type AddNewTodoResponse = BaseResponse & {
  todo: Todo;
}