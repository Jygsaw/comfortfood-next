import React from "react";
import Image from "next/image";
import { titleAppend } from "app/_lib/siteUtils";
import { generateArticles, generateRecipes } from "app/_lib/testUtils";
import Card from "app/_components/Card";
import SectionHeader from "app/_components/SectionHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("Homepage"),
};

const HERO_LINK = "https://www.simplyrecipes.com/thmb/79AUTkQ0tTVt9mgC7MFGWD79cLc=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Non-Dairy-Coffee-Creamer-LEAD-3-72557d1cb77d475292d2e7e0635ed85d.jpg";
const SCROLL_LINK = "https://d14tal8bchn59o.cloudfront.net/CZiNXwdrQIwowYvDIwCS_XCY0FOYi9_A8mP_gjtoC1g/w:960/plain/https://02f0a56ef46d93f03c90-22ac5f107621879d5667e0d7ed595bdb.ssl.cf2.rackcdn.com/sites/34851/photos/1751044/cooking_corner_header_original.jpg";

const Page = () => {
    // TODO: refine thoughts on data models and storage
    // TODO: pull data from endpoint
    const teaserData = [
        {
            title: "Seasonal Favorites",
            link: "/articles",
            cardData: generateArticles(3),
        },
        {
            title: "Easy Snacks",
            link: "/recipes",
            cardData: generateRecipes(3),
        },
        {
            title: "Tips and Tricks",
            link: "/articles",
            cardData: generateArticles(3),
        },
    ];
    const latestData = generateRecipes(8);

    return (
        <div className="bg-orange-50">
            <section className="flex bg-gradient-to-b from-white to-orange-50 to-10%">
                <div className="sticky top-24 h-[calc(100vh-92px)] flex-grow ">
                    <div className="relative w-full h-full">
                        <Image src={HERO_LINK} alt="" priority fill sizes="66vw" style={{ objectFit: "cover" }}/>
                    </div>
                </div>
                <section className="w-2/5 2xl:w-1/3 mx-10">
                    <SectionHeader title="Latest" link="/recent" banner={
                        <Image className="w-fit h-fit mx-auto my-4" src={SCROLL_LINK} alt="" width="275" height="183" />
                    } />
                    <div className="grid grid-cols-2 gap-8">
                        {latestData.map(data => <Card key={data.contentId} data={data} />)}
                    </div>
                </section>
            </section>
            {teaserData.map(data => (
                <div key={data.title} className="w-full my-12 last:bg-gradient-to-b last:from-orange-50 last:to-white">
                    <section className="container mx-auto">
                        <SectionHeader title={data.title} link={data.link} />
                        <div className="w-full grid grid-cols-3 gap-10">
                            {data.cardData.map(data => <Card key={data.contentId} data={data} />)}
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default Page;
