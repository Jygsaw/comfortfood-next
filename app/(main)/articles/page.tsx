import React from "react";
import SectionHeader from "app/_components/SectionHeader";
import UnderConstruction from "app/_components/UnderConstruction";
import AddArticleButton from "./AddArticleButton";

const BANNER_LINK = "https://www.tastefest.com.au/wp-content/uploads/2016/12/cooking-header.jpg";

const Page = () => (
    <>
        <SectionHeader title="Articles" bannerLink={BANNER_LINK} />
        <AddArticleButton />
        <UnderConstruction />
    </>
);

export default Page;
