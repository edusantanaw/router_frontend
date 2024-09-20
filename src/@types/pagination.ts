export interface IPaginationResponse<T> {
  data: T[];
  total: number;
}

export interface IPagination {
  take: number;
  skip: number;
}
