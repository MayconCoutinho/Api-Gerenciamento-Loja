export enum PRODUCTS_ROLES {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}
export interface IProductsDB {
  id: string,
  name: string,
  category: string,
  status: PRODUCTS_ROLES,
  quantity: number,
  created_at: number,
  updated_at: number,
  deleted_at: number
}