export type BasePaginationType = {
  totalPages: number;
  page: number;
  maxPages?: number;
  disabled?: boolean;
  onChange?: (page: number)=>void;
}