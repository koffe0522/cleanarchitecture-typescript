import { UserRepository } from "@/interfaces/db/repositories/userRepository";
import { UserRepositoryImpl } from "@/interfaces/db/repositories/userRepositoryImpl";
import { FindUserRequest, FindUserRequestParams } from "@/interfaces/requests/findUserRequest";
import { UserSerializer } from "@/interfaces/serializer/userSerializer";
import UserUseCase from "@/applicaton/usecases/user"

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  constructor(dbConnection: any) {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepositoryImpl(dbConnection);
  }

  async userAll() {
    try {
      const userUseCase = new UserUseCase.FindUserUseCase(this.userRepository)
      const result = await userUseCase.getAllUsers();
      return this.userSerializer.users(result)
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  async findUser(requests: FindUserRequestParams) {
    try {
      const reqBody = new FindUserRequest(requests);
      const userUseCase = new UserUseCase.FindUserUseCase(this.userRepository);
      const result = await userUseCase.getUser(reqBody.id);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}

export { UserController }