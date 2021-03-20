export interface FindUserRequestParams {
  id: string;
}

export class FindUserRequest {
  private _id: number;

  public get id(): number {
    return this._id;
  }

  public constructor(params: FindUserRequestParams) {
    const validId = this.validRequest(params);
    this._id = validId;
  }

  private validRequest(params: FindUserRequestParams): number {
    const id = params.id;
    const numberId = Number(id);
    if (typeof numberId !== "number") {
      throw new Error(
        JSON.stringify({
          code: 422,
          message: "不正なrequest idです"
        })
      );
    }
    return numberId;
  }
}