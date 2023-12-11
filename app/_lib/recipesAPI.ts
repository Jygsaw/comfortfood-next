import { buildUrl } from "./siteUtils";

import type { PageProps } from "app/_types/next";
import type { Recipe } from "app/_types/record";

const RECIPES_API = "/api/recipes";

export async function getRecipes(searchParams?: PageProps["searchParams"]): Promise<Recipe[]> {
    const url = buildUrl(RECIPES_API, searchParams);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipes);
}

export async function getRecipe(id: string): Promise<Recipe> {
    const url = buildUrl(`${RECIPES_API}/${id}`);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json =>json.data.recipe);
}

export async function createRecipe(data: Partial<Recipe>): Promise<Recipe> {
    const url = buildUrl(RECIPES_API);
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipe);
}

export async function updateRecipe(id: string, data: Partial<Recipe>): Promise<Recipe> {
    const url = buildUrl(`${RECIPES_API}/${id}`);
    const options = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.recipe);
}

export async function deleteRecipe(id: string): Promise<void> {
    const url = buildUrl(`${RECIPES_API}/${id}`);
    const options = {
        method: "DELETE",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
        });
}
