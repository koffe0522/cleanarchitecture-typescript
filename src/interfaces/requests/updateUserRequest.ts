export interface UpdateUserRequestParams {
  id: number;
  name: string;
  age: number;
}

export class UpdateUserRequest {
  private _id: number;
  private _name: string;
  private _age: number;

  public constructor(params: UpdateUserRequestParams) {
    this.valid(params);
    this._id = params.id;
    this._name = params.name;
    this._age = params.age;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  private valid(params: UpdateUserRequestParams): void {
    if (params.name.length < 4) {
      throw new Error("4文字以上の名前");
    }
  }
}