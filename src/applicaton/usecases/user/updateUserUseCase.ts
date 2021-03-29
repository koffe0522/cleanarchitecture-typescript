import { User } from "@/domain/models/user";
import { UserRepository } from "@/interfaces/db/repositories/userRepository";
import { toUpdateUserDTO } from "@/interfaces/dao/userDao";

class UpdateUserUseCase {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public updateUser(user: User): Promise<User> {
    const userDTO = toUpdateUserDTO(user);
    return this.userRepository.update(userDTO);
  }
}

export { UpdateUserUseCase };