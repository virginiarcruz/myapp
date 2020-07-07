class Error {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {}
}

export default Error;
