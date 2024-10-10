export class HttpError extends Error {
  public readonly response: Response;
  constructor(response: Response) {
    super(`HTTP Error: ${response.status} ${response.statusText}`);
    this.name = "HttpError";
    this.response = response;
  }
}

export class NoTokenError extends Error {
  constructor() {
    super("No token found");
    this.name = "NoTokenError";
  }
}
