

interface DeleteUserRequestParams {
  id: number;
}

class DeleteUserRequest {
  private _id: number;

  constructor(params: DeleteUserRequestParams) {
    const { id } = this.validRequest(params);
    this._id = id;
  }

  get id() {
    return this._id;
  }

  private validRequest({ id }: DeleteUserRequestParams) {
    if (typeof id !== 'number') {
      throw Error(
        JSON.stringify({
          code: 422,
          message: `不正なrequest idです`
        })
      )
    }

    return {
      id
    }
  }
}

export {
  DeleteUserRequest,
  DeleteUserRequestParams
}