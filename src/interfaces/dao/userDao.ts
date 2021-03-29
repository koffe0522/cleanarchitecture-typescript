import { User } from "@/domain/models/user";

interface UpdateUserDTO {
  id: number;
  name?: string;
  age?: number;
}

interface CreateUserDTO {
  name: string;
  age: number;
}

const toUpdateUserDTO = (user: User): UpdateUserDTO => {
  return { id: user.id, name: user.name, age: user.age };
};

const toCreateUserDTO = (user: User): CreateUserDTO => {
  return { name: user.name, age: user.age };
};

export { UpdateUserDTO, CreateUserDTO, toUpdateUserDTO, toCreateUserDTO };