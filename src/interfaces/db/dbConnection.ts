export abstract class dbConnection {
  abstract execute<T>(query: string, params?: number | string | null): T;
}