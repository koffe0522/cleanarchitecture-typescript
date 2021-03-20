import { User } from "@/domain/models/user";
import { UserRepository } from "./userRepository";
import { dbConnection } from "../dbConnection"

class UserRepositoryImpl extends UserRepository {
  constructor(private dbConnection: dbConnection) {
    super();
  }

  async findAll(): Promise<User[]> {
    const queryResults = await this.dbConnection.execute<Promise<{ id: number, name: string, age: number }[]>>('SELECT id, name, age FROM users');
    return queryResults
      .map(queryResult =>
        new User(
          queryResult['id'],
          queryResult['name'],
          queryResult['age']
        )
      )
  }

  async find(id: number): Promise<User> {
    const queryResult = await this.dbConnection.execute<Promise<{ id: number, name: string, age: number }>>('SELECT id, name, age FROM users WHERE id = id', id);
    return new User(
      queryResult['id'],
      queryResult['name'],
      queryResult['age'],
    )
  }
}

export { UserRepositoryImpl }