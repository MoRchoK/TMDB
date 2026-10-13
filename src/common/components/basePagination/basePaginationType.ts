export type BasePaginationType = {
  totalPages: number;
  page: number;
  maxPages?: number;
  onChange?: (page: number)=>void;
}