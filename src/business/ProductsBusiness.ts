import { ProductsDataBase } from "../database/ProductsDatabase"

export class ProductsBusiness {
  constructor(
    private productsDataBase: ProductsDataBase
) {}
  async getProductsBusiness(): Promise<any> {
    const response = await this.productsDataBase.getProductsDataBase()
    return response
}
}