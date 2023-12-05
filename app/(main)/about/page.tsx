import React from "react";
import { titleAppend } from "app/_lib/seoUtils";
import UnderConstruction from "app/_components/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("About Us"),
};

const Page = () => <UnderConstruction />;

export default Page;
