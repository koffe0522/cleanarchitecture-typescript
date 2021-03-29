import { User } from "@/domain/models/user";
import { UserRepository } from "@/interfaces/db/repositories/userRepository";

class CreateUserUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}

export { CreateUserUseCase }