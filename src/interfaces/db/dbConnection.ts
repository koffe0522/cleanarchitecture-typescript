export abstract class dbConnection {
  abstract execute(query: string, params?: number | string | null): any;
}