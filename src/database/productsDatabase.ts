import { Products, ProductsDTO } from "../models/products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDataBase extends BaseDatabase {
	public ProductsDBModel = (products: Products): ProductsDTO => {
		const productsDB: ProductsDTO = {
			id: products.getId(),
			name: products.getName(),
			category: products.getCategory(),
			quantity: products.getQuantity(),
			created_at: products.getCreated_at(),
			updated_at: products.getUpdated_at(),
			deleted_at: products.getDeleted_at(),
		};
		return productsDB;
	};

	public async getProductsDataBase () {
		const result = await BaseDatabase.connection("gerenciar_produto").select("*");
		return result;
	}
	public async postProductsDataBase (products: Products) {
		const productsDB = this.ProductsDBModel(products);

		const result = await BaseDatabase.connection("gerenciar_produto").insert(productsDB);
		return result;
	}
	public async putTableDataBase (id: string, table: string, newValue: string) {
		await BaseDatabase.connection("gerenciar_produto").update(table, newValue).where("id", id);
	}
	public async deleteProductDataBase (id: string) {
		await BaseDatabase.connection("gerenciar_produto").where("id", id).del();
	}
}
