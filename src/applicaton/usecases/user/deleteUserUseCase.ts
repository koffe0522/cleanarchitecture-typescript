import { UserRepository } from "@/interfaces/db/repositories/userRepository";


class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) { }

  public deleteUser(id: number): Promise<null> {
    return this.userRepository.delete(id)
  }
}

export {
  DeleteUserUseCase
}