import React from "react";
import { titleAppend } from "lib/seoUtils";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("Homepage"),
};

const Page = () => (
    <>
        <h1>Hello, Homepage</h1>
    </>
);

export default Page;
