import React from "react";
import SectionHeader from "app/_components/SectionHeader";
import UnderConstruction from "app/_components/UnderConstruction";

const BANNER_LINK = "https://simplebites.net/wp-content/uploads/2018/05/Cookbookes-header-e1527645406953.jpg";

const Page = () => (
    <>
        <SectionHeader title="Recipes" bannerLink={BANNER_LINK} />
        <UnderConstruction />
    </>
);

export default Page;
