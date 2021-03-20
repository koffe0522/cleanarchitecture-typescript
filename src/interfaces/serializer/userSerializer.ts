import moment from "moment";
import { User } from "@/domain/models/user";
import {
  ApplicationSerializer,
  TResponse,
  StatusCode
} from "./applicationSerializer";

export interface UserResponse {
  id: number;
  name: string;
  age: number;
}

export class UserSerializer extends ApplicationSerializer {
  public user(data: User): TResponse<UserResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format()
      };
    }

    return {
      code: StatusCode.success,
      data,
      responsedAt: moment().format()
    };
  }

  public users(data: User[]): TResponse<UserResponse[]> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format()
      };
    }
    return {
      code: StatusCode.success,
      data,
      responsedAt: moment().format()
    };
  }

  public delete(): TResponse<Record<string, null>> {
    return {
      code: StatusCode.success,
      data: {},
      responsedAt: moment().format()
    };
  }
}