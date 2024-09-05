import type { BaseResponse } from "../../../../../../core/todos/models/DTOs/responses/base-response";


export type DeleteTodoResponse = BaseResponse & { id: string; }