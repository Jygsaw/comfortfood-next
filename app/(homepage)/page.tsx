import React from "react";
import { titleAppend } from "lib/seoUtils";
import UnderConstruction from "components/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("Homepage"),
};

const Page = () => <UnderConstruction />;

export default Page;
