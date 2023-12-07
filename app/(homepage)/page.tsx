import React from "react";
import { titleAppend } from "app/_lib/siteUtils";
import UnderConstruction from "app/_components/UnderConstruction";
import Teaser from "app/_components/Teaser";
import type { Metadata } from "next";
import { generateRecipes } from "app/_lib/testUtils";

export const metadata: Metadata = {
    title: titleAppend("Homepage"),
};

// TODO: refine thoughts on data models and storage
const teaserData = [
    {
        title: "Seasonal Favorites",
        link: "/articles",
        cardData: generateRecipes(3),
    },
    {
        title: "Easy Snacks",
        link: "/recipes",
        cardData: generateRecipes(3),
    },
    {
        title: "Tips and Tricks",
        link: "/articles",
        cardData: generateRecipes(3),
    },
];

const Page = () => {
    return (
        <div className="bg-orange-50">
            <section className="relative w-full h-[calc(100vh-92px)] mx-auto bg-gradient-to-b from-white to-orange-50">
                <UnderConstruction />
            </section>
            {teaserData.map(data => (
                <div key={data.title} className="w-full my-12 last:bg-gradient-to-b last:from-orange-50 last:to-white">
                    <Teaser {...data} />
                </div>
            ))}
        </div>
    );
};

export default Page;
