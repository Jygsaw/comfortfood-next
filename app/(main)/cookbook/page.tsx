import React from "react";
import { getAuth } from "app/_lib/auth";
import SectionHeader from "app/_components/SectionHeader";
import LoginControl from "app/_components/LoginControl";
import AddArticleButton from "../cookbook/AddArticleButton";
import AddRecipeButton from "../cookbook/AddRecipeButton";
import UnderConstruction from "app/_components/UnderConstruction";

const BANNER_LINK = "https://www.innatfollybeach.com/wp-content/uploads/colossal-thanksgiving-2017-header-1200x526.jpg";

const Page = async () => {
    const session = await getAuth();

    return (
        <>
            <SectionHeader title="Cookbook" bannerLink={BANNER_LINK} />
            {!session ? (
                <>
                    <LoginControl type="link" /> to share your ideas and record your recipes!
                </>
            ) : (
                <>
                    <AddArticleButton />
                    <AddRecipeButton />
                </>
            )}
            <UnderConstruction />
        </>
    );
};

export default Page;
