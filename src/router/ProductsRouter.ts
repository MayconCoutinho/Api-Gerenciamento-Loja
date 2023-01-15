import { Router } from 'express'
import { ProductsBusiness } from '../business/ProductsBusiness'
import { ProductsController } from '../controller/productsController'
import { ProductsDataBase } from '../database/ProductsDatabase'

export const productsRouter = Router()

const productsController = new ProductsController(
    new ProductsBusiness(
        new ProductsDataBase()
    )
)
productsRouter.get("/", productsController.getProductsController)