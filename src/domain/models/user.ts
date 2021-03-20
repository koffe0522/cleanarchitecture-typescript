/**
 * BusinessData
 *
 * @class User
 */
class User {
  constructor(
    private _id?: number,
    private _name?: string,
    private _age?: number,
  ) { }

  get id(): number {
    return this._id ?? 0
  }

  set id(id: number) {
    this._id = id
  }

  get name(): string {
    return this._name ?? ''
  }

  set name(name: string) {
    this._name = name
  }

  get age(): number {
    return this._age ?? 0
  }

  set age(age: number) {
    this._age = age
  }

  /**
   * BusinessRule
   *
   * @param {string} postText
   * @returns {boolean}
   * @memberof User
   */
  isPostLengthValid(postText: string): boolean {
    return postText.length > 0 && postText.length < 256;
  }
}

export { User }