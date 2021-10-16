export interface ApiResponseAuthI<T> {
  status: string;
  token: string;
  data: T;
}
