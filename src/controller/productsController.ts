import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { BaseError } from "../errors/BaseError";
import { IRegistrationInputDTO } from "../models/products";

export class ProductsController {
	constructor (private productsBusiness: ProductsBusiness) {}
	public getProductsController = async (req: Request, res: Response) => {
		try {
			const response = await this.productsBusiness.getProductsBusiness();
			res.status(200).send(response);
		} catch (error) {
			console.log(error);
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message });
			}
			res.status(500).send({ message: "Erro inesperado no endpoint getProducts" });
		}
	};
	public postProductsController = async (req: Request, res: Response) => {
		try {
			const input: IRegistrationInputDTO = {
				name: req.body.name,
				category: req.body.category,
				quantity: req.body.quantity,
			};
			const response = await this.productsBusiness.postProductsBusiness(input);
			res.status(200).send(response);
		} catch (error) {
			console.log(error);
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message });
			}
			res.status(500).send({ message: "Erro inesperado no endpoint postProducts" });
		}
	};
	public putTableController = async (req: Request, res: Response) => {
		try {
			const id = req.params.id;
			const table = req.params.table;
			const newValue = req.params.newValue;
			const response = await this.productsBusiness.putTableBusiness(id, table, newValue);
			res.status(201).send(response);
		} catch (error: any) {
			res.status(500).send(error);
		}
	};
	public deleteProductController = async (req: Request, res: Response) => {
		try {
			const id = req.params.id;
			const response = await this.productsBusiness.deleteProductBusiness(id);
			res.status(201).send(response);
		} catch (error: any) {
			res.status(500).send(error);
		}
	};
}
