import { User } from "@/domain/models/user";
import { FindUserUseCase, CreateUserUseCase, UpdateUserUseCase, DeleteUserUseCase } from "@/applicaton/usecases/user"
import { UserRepository } from "@/interfaces/db/repositories/userRepository";
import { UserRepositoryImpl } from "@/interfaces/db/repositories/userRepositoryImpl";
import { UserSerializer } from "@/interfaces/serializer/userSerializer";
import { FindUserRequest, FindUserRequestParams } from "@/interfaces/requests/findUserRequest";
import { CreateUserRequest, CreateUserRequestParams } from "@/interfaces/requests/createUserRequest";
import { UpdateUserRequest, UpdateUserRequestParams } from "@/interfaces/requests/updateUserRequest";
import { DeleteUserRequest, DeleteUserRequestParams } from "@/interfaces/requests/deleteUserRequest";


class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  constructor(dbConnection: any) {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepositoryImpl(dbConnection);
  }

  async userAll() {
    try {
      const userUseCase = new FindUserUseCase(this.userRepository)
      const result = await userUseCase.getAllUsers();
      return this.userSerializer.users(result)
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async findUser(requests: FindUserRequestParams) {
    try {
      const reqBody = new FindUserRequest(requests);
      const userUseCase = new FindUserUseCase(this.userRepository);
      const result = await userUseCase.getUser(reqBody.id);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async createUser(requests: CreateUserRequestParams) {
    try {
      const reqBody = new CreateUserRequest(requests);
      const userUseCase = new CreateUserUseCase(this.userRepository);
      const user = new User(undefined, reqBody.name, reqBody.age);
      const result = await userUseCase.createUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async updateUser(requests: UpdateUserRequestParams) {
    try {
      const reqBody = new UpdateUserRequest(requests);
      const userUseCase = new UpdateUserUseCase(this.userRepository);
      const user = new User(reqBody.id, reqBody.name, reqBody.age);
      const result = await userUseCase.updateUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async deleteUser(requests: DeleteUserRequestParams) {
    try {
      const reqBody = new DeleteUserRequest(requests);
      const userUseCase = new DeleteUserUseCase(this.userRepository);
      await userUseCase.deleteUser(reqBody.id)
      return this.userSerializer.delete()
    } catch (error) {

    }
  }
}

export { UserController }