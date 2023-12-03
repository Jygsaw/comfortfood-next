import type { Recipe } from "types/recipe";
import type { UrlSearchParams } from "types/search";

const RECIPE_API = "/api/recipes";

export async function getRecipes(params: UrlSearchParams): Promise<Recipe[]> {
    const query = "?" + new URLSearchParams(params).toString();
    const url = `http://${process.env.RENDER_EXTERNAL_HOSTNAME}${RECIPE_API}${query}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipes);
}
