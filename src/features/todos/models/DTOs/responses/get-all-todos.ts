import { Todo } from "../../todo";
import type { BaseResponse } from "./base-response";

export type GetAllTodosResponse = BaseResponse & {
  todos: Todo[];
}