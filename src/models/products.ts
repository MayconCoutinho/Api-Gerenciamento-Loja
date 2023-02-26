export enum PRODUCTS_ROLES {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
export interface IProductsDB {
  id: string
  name: string
  category: string
  quantity: number
  created_at: number
  updated_at: number
  deleted_at: number
}
export interface ProductsDTO {
  id: string
  name: string
  category: string
  quantity: number
  created_at: number
  updated_at: number
  deleted_at: number
}
export interface IRegistrationInputDTO {
  name: string
  category: string
  quantity: number
}

export class Products {
  constructor(
    private id: string,
    private name: string,
    private category: string,
    private quantity: number,
    private created_at: number,
    private updated_at: number,
    private deleted_at: number
  ) {}

  public getId = () => {
    return this.id
  }
  public getName = () => {
    return this.name
  }
  public getCategory = () => {
    return this.category
  }
  public getQuantity = () => {
    return this.quantity
  }
  public getCreated_at = () => {
    return this.created_at
  }
  public getUpdated_at = () => {
    return this.updated_at
  }
  public getDeleted_at = () => {
    return this.deleted_at
  }
  public setId = (newId: string) => {
    this.id = newId
  }
  public setName = (newName: string) => {
    this.name = newName
  }
  public setCategory = (newCategory: string) => {
    this.category = newCategory
  }
  public setQuantity = (newQuantity: number) => {
    this.quantity = newQuantity
  }
  public setCreated_at = (newCreated_at: number) => {
    this.created_at = newCreated_at
  }
  public setUpdated_at = (newUpdated_at: number) => {
    this.updated_at = newUpdated_at
  }
  public setDeleted_at = (newDeleted_at: number) => {
    this.deleted_at = newDeleted_at
  }
}
export interface ProductsOutputDTO {
  message: string
}
