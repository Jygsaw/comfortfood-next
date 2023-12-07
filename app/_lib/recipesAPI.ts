import { buildUrl } from "./siteUtils";

import type { Recipe } from "app/_types/recipe";
import type { UrlSearchParams } from "app/_types/search";

const RECIPES_API = "/api/recipes";

export async function getRecipes(searchParams: UrlSearchParams): Promise<Recipe[]> {
    const url = buildUrl(RECIPES_API, searchParams);

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipes);
}
