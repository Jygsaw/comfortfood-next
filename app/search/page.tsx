import React from "react";
import { titleAppend } from "lib/seoUtils";
import { getRecipes } from "lib/recipesAPI";
import RecipeCard from "components/RecipeCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("Search"),
};

const Page = async () => {
    const recipes = await getRecipes();

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
