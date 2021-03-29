
export interface CreateUserRequestParams {
  name: string;
  age: number;
}

export class CreateUserRequest {
  private _name: string;
  private _age: number;

  constructor(params: CreateUserRequestParams) {
    const { name, age } = this.validRequest(params)
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age
  }

  private validRequest({ name, age }: CreateUserRequestParams) {
    const numberAge = Number(age);
    const errors = [
      ...(typeof numberAge === "number" ? [] : ["age"]),
      ...(name ? [] : ["name"])
    ]
    if (errors.length > 0) {
      throw new Error(
        JSON.stringify({
          code: 422,
          message: `不正なrequest ${errors.join()}です`
        })
      );
    }
    return {
      name,
      age
    };
  }
}
