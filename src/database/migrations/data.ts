import { IProductsDB } from "../../models/products";

export const products: IProductsDB[] = [
  {
    id: "1",
    name: "iphone 11",
    category: "smartphone",
    quantity: 10,
    created_at: 2,
    updated_at: 4,
    deleted_at: 5
  },  {
    id: "2",
    name: "macbook air m1",
    category: "laptop",
    quantity: 1,
    created_at: 5,
    updated_at: 4,
    deleted_at: 10
  },  {
    id: "3",
    name: "ipad pro 2020",
    category: "tablet",
    quantity: 6,
    created_at: 3,
    updated_at: 4,
    deleted_at: 1
  },
]