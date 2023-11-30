import React from "react";
import { type Metadata } from "next";
import Link from "next/link";
import ArticleCard from "components/ArticleCard";
import RecipeCard from "components/RecipeCard";
import { titleAppend } from "lib/seoUtils";

export const metadata: Metadata = {
    title: titleAppend("Homepage"),
};

const Page = () => (
    <>
        Hello, Homepage.
        <div>
            <Link href="/search">Search for recipes</Link>
        </div>
        <div>
            <ArticleCard id="1" slug="interesting-article" />
        </div>
        <div>
            <ArticleCard id="1" slug="" />
        </div>
        <div>
            <RecipeCard id="2" slug="amazing-recipe" />
        </div>
        <div>
            <RecipeCard id="2" slug="" />
        </div>
    </>
);

export default Page;
