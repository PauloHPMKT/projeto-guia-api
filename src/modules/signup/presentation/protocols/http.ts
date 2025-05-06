export interface HttpRequest<T = any> {
  body?: T;
  headers?: any;
  params?: any;
  query?: any;
  file?: any;
}

export interface HttpResponse {
  statusCode: number;
  body: any;
}
