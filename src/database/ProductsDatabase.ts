import { BaseDatabase } from "./BaseDatabase"

export class ProductsDataBase extends BaseDatabase {
    public async getProductsDataBase() {
        const result = await BaseDatabase.connection("gerenciar_produto")
            .select('*')
        return result
    }
}