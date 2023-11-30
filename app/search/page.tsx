import React from "react";
import { titleAppend } from "lib/seoUtils";
import { getRecipes } from "lib/recipesAPI";
import RecipeCard from "components/RecipeCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("Search"),
};

type Input = {
    searchParams: {
        q: string,
    },
};

const Page = async ({ searchParams: { q } }: Input) => {
    const recipes = await getRecipes(q);

    return (
        <>
            <div>
                <form action="/search" method="get">
                    <input type="text" name="q" defaultValue={q}/>
                    <input type="submit" />
                </form>
            </div>
            <div>
                {recipes.length ?
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.id} id={recipe.id} slug={recipe.slug} />
                    )) : (
                        <div>No recipes found.</div>

                    )}
            </div>
        </>
    );
};

export default Page;
