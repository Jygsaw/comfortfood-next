import React from "react";
import SectionHeader from "app/_components/SectionHeader";
import UnderConstruction from "app/_components/UnderConstruction";

const BANNER_LINK = "https://www.innatfollybeach.com/wp-content/uploads/colossal-thanksgiving-2017-header-1200x526.jpg";

const Page = () => (
    <>
        <SectionHeader title="Cookbook" bannerLink={BANNER_LINK} />
        <UnderConstruction />
    </>
);

export default Page;
