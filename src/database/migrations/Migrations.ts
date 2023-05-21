import { BaseDatabase } from "../BaseDatabase";
import { products } from "./data";

export const PRODUCTS_LIST = "gerenciar_produto";

class Migrations extends BaseDatabase {
	execute = async () => {
		try {
			console.log("Creating tables...");
			await this.createTables();
			console.log("✅ Tables created successfully.");
			console.log("✅ Populating tables...");
			await this.insertData();
			console.log("✅ Tables populated successfully.");
			console.log("✅ Migrations completed.");
		} catch (error) {
			console.log("❌ FAILED! Error in migrations...");
			if (error instanceof Error) {
				console.log(error.message);
			}
		} finally {
			console.log("✅ Ending connection...");
			BaseDatabase.connection.destroy();
			console.log("✅ Connection closed");
		}
	};
	createTables = async () => {
		await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS  ${PRODUCTS_LIST};

        CREATE TABLE IF NOT EXISTS ${PRODUCTS_LIST}( 
            id VARCHAR(50) NOT NULL,
            name VARCHAR(45) NOT NULL UNIQUE,
            category  VARCHAR(45),
            status ENUM ('ACTIVE','INACTIVE') DEFAULT 'ACTIVE' NOT NULL,
            quantity INT NOT NULL,
            created_at  INT NOT NULL,
            updated_at  INT NOT NULL,
            deleted_at  INT NOT NULL
            );
        `);
	};
	insertData = async () => {
		await BaseDatabase.connection(PRODUCTS_LIST).insert(products);
	};
}
const migrations = new Migrations();
migrations.execute();
