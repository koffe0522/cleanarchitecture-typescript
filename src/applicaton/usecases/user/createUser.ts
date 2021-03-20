import { User } from "@/domain/models/user";
import { UserRepository } from "@/interfaces/db/repositories/userRepository";

class CreateUser {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public createUser(user: User): Promise<User> {
    // const userDTO = toCreateUserDTO(user);
    // return this.userRepository.create(userDTO);
  }
}

export { CreateUser }