import { Pantry } from "pantry-cloud";

let pantry: Pantry;

export function setupPantry(pantryId: string) {
  pantry = new Pantry(pantryId || "");
}

export async function logPantry() {
  const pantryDetails = await pantry.getPantry();
  console.log(pantryDetails);

  const basketContents = await pantry.getBasket("ToDoList");

  console.log(basketContents);
}

export async function getHome() {
  const basketContents = await pantry.getBasket("Home");

  return {
    greeting: basketContents.greeting,
    welcome: basketContents.welcomeText,
  };
}
