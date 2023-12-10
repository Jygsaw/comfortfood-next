import { buildUrl } from "./siteUtils";

import type { Recipe } from "app/_types/record";

const RECIPE_API = "/api/recipe";

export async function addRecipe(recipe: Recipe): Promise<Recipe> {
    const url = buildUrl(RECIPE_API);
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipe);
}
