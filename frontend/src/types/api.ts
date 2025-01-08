export interface MultipleResponse<T> {
  [x: string]: any;
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
}
