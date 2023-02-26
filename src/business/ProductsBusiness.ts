import { ProductsDataBase } from "../database/productsDatabase";
import { ParamsError } from "../errors/ParamsError";
import { IRegistrationInputDTO, Products, ProductsOutputDTO } from "../models/products";
import { IdGenerator } from "../services/IdGenerator";

export class ProductsBusiness {
	constructor (private productsDataBase: ProductsDataBase, private idGenerator: IdGenerator) {}
	async getProductsBusiness (): Promise<any> {
		const response = await this.productsDataBase.getProductsDataBase();
		return response;
	}
	async postProductsBusiness (input: IRegistrationInputDTO): Promise<ProductsOutputDTO> {
		const { name, category, quantity } = input;
		const id = this.idGenerator.generate();
		const created_at = 0;
		const updated_at = 0;
		const deleted_at = 0;

		if (quantity < 0) {
			throw new ParamsError("Quantidade menor que 0");
		}

		const products = new Products(id, name, category, quantity, created_at, updated_at, deleted_at);
		await this.productsDataBase.postProductsDataBase(products);

		const response: ProductsOutputDTO = {
			message: "Produto adicionado com sucesso",
		};
		return response;
	}
	async putTableBusiness (id: string, table: string, newValue: string): Promise<any> {
		await this.productsDataBase.putTableDataBase(id, table, newValue);
		const response: ProductsOutputDTO = {
			message: `Um produto da tabela = ${table}, foi mudado  para o valor = ${newValue} com sucesso`,
		};
		return response;
	}
	async deleteProductBusiness (id: string): Promise<any> {
		await this.productsDataBase.deleteProductDataBase(id);
		const response: ProductsOutputDTO = {
			message: `O produto com id = ${id} foi deletado.`,
		};
		return response;
	}
}
