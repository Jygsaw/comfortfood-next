import type { Recipe } from "types/recipe";
import type { UrlSearchParams } from "types/search";

const RECIPE_API = "/api/recipes";

export async function getRecipes(params: UrlSearchParams): Promise<Recipe[]> {
    const searchParams = new URLSearchParams(params);
    const url = `http://${process.env.HOSTNAME}${RECIPE_API}?${searchParams.toString()}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipes);
}
