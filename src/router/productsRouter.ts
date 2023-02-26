import { Router } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { ProductsDataBase } from "../database/productsDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { ProductsController } from "../controller/productsController";

export const productsRouter = Router();

const productsController = new ProductsController(
	new ProductsBusiness(new ProductsDataBase(), new IdGenerator())
);
productsRouter.get("/", productsController.getProductsController);
productsRouter.post("/cadastro", productsController.postProductsController);
productsRouter.put("/:id/:table/:newValue", productsController.putTableController);
productsRouter.delete("/:id", productsController.deleteProductController);
