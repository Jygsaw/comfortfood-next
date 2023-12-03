import type { Recipe } from "types/recipe";

// TODO: replace hardcoded hostname with environment variables
const RECIPE_API = "http://localhost:3000/api/recipes";

export async function getRecipes(searchParams: URLSearchParams): Promise<Recipe[]> {
    const url = `${RECIPE_API}?${searchParams.toString()}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipes);
}
