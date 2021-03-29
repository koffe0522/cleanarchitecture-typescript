import { User } from "@/domain/models/user";
import { CreateUserDTO, UpdateUserDTO } from "@/interfaces/dao/userDao";

abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract find(id: number): Promise<User>;
  abstract create(createUserDTO: CreateUserDTO): Promise<User>;
  abstract update(updateUserDTO: UpdateUserDTO): Promise<User>;
  abstract delete(id: number): Promise<null>;
}

export { UserRepository };