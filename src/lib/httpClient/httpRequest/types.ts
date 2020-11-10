export type QueryObject = {
  [key: string]: string;
};

export interface Data {
  headers?: {
    accept?: string;
  };
  query?: QueryObject;
}

export interface HttpRequestHandler {
  get: (arg0: string, arg1?: Data) => Promise<Response>;
}
