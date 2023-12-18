import { handleNetworkResponse } from "./apiUtils";
import { buildUrl } from "./siteUtils";

import type { PageProps } from "app/_types/site";
import type { Recipe, RecipeDraft } from "app/_types/record";

const RECIPES_API = "/api/recipes";

export async function getRecipes(searchParams?: PageProps["searchParams"]): Promise<Recipe[]> {
    const url = buildUrl(RECIPES_API, searchParams);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.recipes);
}

export async function getRecipe(id: string): Promise<Recipe> {
    const url = buildUrl(`${RECIPES_API}/${id}`);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.recipe);
}

export async function deleteRecipe(id: string): Promise<void> {
    const url = buildUrl(`${RECIPES_API}/${id}`);
    const options = {
        method: "DELETE",
    };

    return fetch(url, options)
        .then(handleNetworkResponse);
}

export async function createRecipeDraft(id: string = ""): Promise<RecipeDraft> {
    const url = buildUrl(`${RECIPES_API}/${id}`);
    const options = {
        method: "POST",
    };

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.recipe);
}

export async function getRecipeDraft(id: string): Promise<RecipeDraft> {
    const url = buildUrl(`${RECIPES_API}/${id}/draft`);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.recipe);
}

export async function updateRecipeDraft(id: string, data: Partial<RecipeDraft>): Promise<RecipeDraft> {
    const url = buildUrl(`${RECIPES_API}/${id}/draft`);
    const options = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.recipe);
}

export async function deleteRecipeDraft(id: string): Promise<void> {
    const url = buildUrl(`${RECIPES_API}/${id}/draft`);
    const options = {
        method: "DELETE",
    };

    return fetch(url, options)
        .then(handleNetworkResponse);
}

export async function publishRecipeDraft(id: string): Promise<void> {
    const url = buildUrl(`${RECIPES_API}/${id}/draft/preview`);
    const options = {
        method: "PATCH",
    };

    return fetch(url, options)
        .then(handleNetworkResponse);
}
