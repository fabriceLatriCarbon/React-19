import { Todo } from "../../todo";
import { BaseResponse } from "./base-response";


export type AddNewTodoResponse = BaseResponse & {
  todo: Todo;
}