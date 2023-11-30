import type { Recipe } from "types/recipe";

// TODO: create recipe API
const RECIPE_API = "https://api.github.com/repos/Jygsaw/vizro-next";
const RECIPES_1 = [
    {
        id: "1",
        slug: "recipe-1",
        name: "recipe 1"
    },
    {
        id: "2",
        slug: "recipe-2",
        name: "recipe 2"
    },
    {
        id: "3",
        slug: "recipe-3",
        name: "recipe 3"
    },
];
const RECIPES_2 = [
    {
        id: "4",
        slug: "recipe-4",
        name: "recipe 4"
    },
    {
        id: "5",
        slug: "recipe-5",
        name: "recipe 5"
    },
    {
        id: "6",
        slug: "recipe-6",
        name: "recipe 6"
    },
];

export async function getRecipes(): Promise<Recipe[]> {
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
        .then(() => {
            return [...RECIPES_1, ...RECIPES_2];
        });
};
