import cors from "cors";
import express from "express";
import { productsRouter } from "./router/productsRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
	console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

app.use("/products", productsRouter);
