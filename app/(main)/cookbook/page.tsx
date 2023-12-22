import React from "react";
import SectionHeader from "app/_components/SectionHeader";
import UnderConstruction from "app/_components/UnderConstruction";
import AddArticleButton from "../cookbook/AddArticleButton";
import AddRecipeButton from "../cookbook/AddRecipeButton";

const BANNER_LINK = "https://www.innatfollybeach.com/wp-content/uploads/colossal-thanksgiving-2017-header-1200x526.jpg";

const Page = () => {
    return (
        <>
            <SectionHeader title="Cookbook" bannerLink={BANNER_LINK} />
            <AddArticleButton />
            <AddRecipeButton />
            <UnderConstruction />
        </>
    );
};

export default Page;
