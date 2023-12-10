import { buildUrl } from "./siteUtils";

import type { PageProps } from "app/_types/next";
import type { Recipe } from "app/_types/record";

const RECIPES_API = "/api/recipes";

export async function getRecipes(searchParams?: PageProps["searchParams"]): Promise<Recipe[]> {
    const url = buildUrl(RECIPES_API, searchParams);

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipes);
}
