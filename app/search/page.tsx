import React from "react";
import { type Metadata } from "next";
import { titleAppend } from "lib/seoUtils";
import { type Recipes } from "types/recipe";
import RecipeCard from "components/RecipeCard";

export const metadata: Metadata = {
    title: titleAppend("Search"),
};

const recipes1 = [
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
const recipes2 = [
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

const Page = () => {
    const recipes: Recipes = [...recipes1, ... recipes2];

    return recipes.length ? (
        <div>
            <div>search bar</div>
            <div>
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} id={recipe.id} slug={recipe.slug} />
                ))}
            </div>
        </div>
    ) : (
        <div>No recipes found.</div>
    );
};

export default Page;
