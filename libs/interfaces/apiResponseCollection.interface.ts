export interface ApiResponseCollectionI<T> {
  status: string;
  results: number;
  data: T[]
}
