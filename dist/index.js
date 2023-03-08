import * as dotenv from "dotenv";
import { setupPantry } from "./pantryClient";
dotenv.config();
import { createApolloServer } from "./server";
if (process.env.NODE_ENV !== "test") {
    const pantryId = process.env.PANTRY_ID;
    if (!pantryId) {
        throw new Error("Pantry id could not be sourced from env");
    }
    setupPantry(pantryId);
    const { url } = await createApolloServer();
    console.log(`🚀 Query endpoint ready at ${url}`);
}
