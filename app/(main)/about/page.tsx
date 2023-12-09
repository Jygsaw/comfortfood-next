import React from "react";
import { titleAppend } from "app/_lib/siteUtils";
import SectionHeader from "app/_components/SectionHeader";
import UnderConstruction from "app/_components/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: titleAppend("About Us"),
};

const BANNER_LINK = "https://www.greenpan.ch/sites/www.greenpan.ch/files/headers/banner-set.jpg";

const Page = () => (
    <>
        <SectionHeader title="About" bannerLink={BANNER_LINK} />
        <UnderConstruction />
    </>
);

export default Page;
