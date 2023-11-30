import React from "react";
import { type Metadata } from "next";
import { titleAppend } from "lib/seoUtils";

export const metadata: Metadata = {
    title: titleAppend("About Us"),
};

const Page = () => (
    <>
        This is the about page.
    </>
);

export default Page;
