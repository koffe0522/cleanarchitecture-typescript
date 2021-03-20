import { dbConnection } from "./dbConnection";


export class MysqlConnection extends dbConnection {
  execute<T>(query: string, params?: string | number | null): T {
    throw new Error("Method not implemented.");
  }
}