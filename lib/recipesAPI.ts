import { generateRecipe } from "lib/testUtils";
import type { Recipe } from "types/recipe";

// TODO: create recipe API
const RECIPE_API = "https://api.github.com/repos/Jygsaw/vizro-next";

export async function getRecipes(query: string): Promise<Recipe[]> {
    const url = RECIPE_API;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => {
            if (json.errors) throw new Error("Fetch API failed: " + url);
            return json.recipes || [];
        })
        // TODO remove mock
        .then(() => {
            const recipes = [];
            for (let i = 0; i < (query?.length ?? 0); i++) {
                recipes.push(generateRecipe(i.toString()));
            }
            return recipes;
        });
};
