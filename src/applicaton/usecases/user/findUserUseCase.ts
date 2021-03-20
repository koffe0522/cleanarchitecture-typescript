import { UserRepository } from "@/interfaces/db/repositories/userRepository";
import { User } from "@/domain/models/user";


class FindUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) { }

  public getUser(id: number): Promise<User> {
    return this.userRepository.find(id);
  }

  public getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export { FindUserUseCase }