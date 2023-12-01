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
    const statusMsg = !q
        ? "Find your next recipe today!"
        : !recipes.length ? `No "${q}" recipes found` : "";

    return (
        <>
            <form className="w-3/4 mx-auto my-6 flex gap-5" id="searchForm" action="/search" method="get">
                <input className="flex-grow p-2 border-2 text-2xl" type="text" name="q" defaultValue={q}/>
                <input className="text-xl" type="submit" />
            </form>

            <section className="flex justify-center">
                <p className="text-xl font-semibold">{statusMsg}</p>
            </section>

            <section className="w-full grid grid-cols-3 gap-x-10 gap-y-16 place-items-center">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="w-96 h-96">
                        <RecipeCard {...recipe} />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Page;
