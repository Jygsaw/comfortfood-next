import React from "react";
import { titleAppend } from "app/_lib/siteUtils";
import { getRecipes } from "app/_lib/recipesAPI";
import RecipeCard from "app/_components/RecipeCard";
import SectionHeader from "app/_components/SectionHeader";

import type { Metadata } from "next";
import type { PageProps } from "app/_types/site";

export const metadata: Metadata = {
    title: titleAppend("Search"),
};

const BANNER_LINK = "https://acupunctureofiowa.com/wp-content/uploads/2019/11/Acupuncture-of-Iowa-Iowa-City-Blogs-header-food.jpg";

const Page = async ({ searchParams }: PageProps) => {
    const q = searchParams?.q;
    const recipes = q ? await getRecipes(searchParams) : [];
    const statusMsg = q
        ? `Found ${recipes.length} recipes for "${q}"`
        : "Find your next recipe today!";

    return (
        <>
            <SectionHeader title="Search" bannerLink={BANNER_LINK} />
            <form className="w-3/4 mx-auto my-6 flex gap-5" id="searchForm" action="/search" method="get">
                <input className="flex-grow p-2 border-2 text-2xl" type="text" name="q" defaultValue={q}/>
                <input className="text-xl" type="submit" />
            </form>

            <section className="flex justify-center m-6">
                <p className="text-xl font-semibold">{statusMsg}</p>
            </section>

            <section className="w-full grid grid-cols-3 gap-x-10 gap-y-16 place-items-center">
                {recipes.map(recipe => (
                    <div key={recipe.contentId} className="w-96 h-96">
                        <RecipeCard {...recipe} />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Page;
