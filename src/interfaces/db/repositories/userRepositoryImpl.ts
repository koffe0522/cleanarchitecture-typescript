import { User } from "@/domain/models/user";
import { UserRepository } from "./userRepository";
import { dbConnection } from "../dbConnection"
import { CreateUserDTO, UpdateUserDTO } from "@/interfaces/dao/userDao";

class UserRepositoryImpl extends UserRepository {
  constructor(private dbConnection: dbConnection) {
    super();
  }

  async findAll(): Promise<User[]> {
    const queryResults = await this.dbConnection.execute('SELECT id, name, age FROM users');
    return queryResults
      .map((queryResult: any) =>
        new User(
          queryResult['id'],
          queryResult['name'],
          queryResult['age']
        )
      )
  }

  async find(id: number): Promise<User> {
    const queryResult = await this.dbConnection.execute('SELECT id, name, age FROM users WHERE id = ?', id);
    return new User(
      queryResult['id'],
      queryResult['name'],
      queryResult['age'],
    )
  }

  public async create(createUserDto: CreateUserDTO): Promise<User> {
    const user = await this.dbConnection.execute(
      `INSERT INTO users (name, age) VALUES ("${createUserDto.name}", "${createUserDto.age}")`
    );
    return user;
  }

  public async update(userDTO: UpdateUserDTO): Promise<User> {
    const result = await this.dbConnection.execute(
      `update users set name = ${userDTO.name}, age = ${userDTO.age} WHERE id = ?`,
      userDTO.id
    );
    return result;
  }

  public async delete(id: number): Promise<null> {
    await this.dbConnection.execute("delete from Users where id = ?", id);
    return null;
  }
}

export { UserRepositoryImpl }