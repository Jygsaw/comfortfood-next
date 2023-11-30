import React from "react";
import { titleAppend } from "lib/seoUtils";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("Search"),
};

const Page = () => (
    <>
        <div>search bar</div>
        <div>
            <div>recipe card</div>
            <div>recipe card</div>
            <div>recipe card</div>
        </div>
        <div>
            <div>recipe card</div>
            <div>recipe card</div>
            <div>recipe card</div>
        </div>
    </>
);

export default Page;
