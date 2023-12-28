import React from "react";
import { getAuth } from "app/_lib/auth";
import { getList } from "app/_lib/listsAPI";
import SectionHeader from "app/_components/SectionHeader";
import LoginControl from "app/_components/LoginControl";
import Card from "app/_components/Card";
import AddArticleButton from "./AddArticleButton";
import AddRecipeButton from "./AddRecipeButton";

const BANNER_LINK = "https://www.innatfollybeach.com/wp-content/uploads/colossal-thanksgiving-2017-header-1200x526.jpg";

const Page = async () => {
    const session = await getAuth();
    const list = session ? await getList({ createdBy: session.user.userId }) : [];

    return (
        <>
            <SectionHeader
                title="Cookbook" bannerLink={BANNER_LINK}
                postTitle={
                    <section className="flex gap-3 justify-end">
                        <AddArticleButton />
                        <AddRecipeButton />
                    </section>
                }
            />

            {!session
                ? <p><LoginControl type="link" /> to share your ideas and record your recipes!</p>
                : (
                    <section className="w-full grid grid-cols-3 gap-10">
                        {list.map(data => <Card key={data.contentId} data={data} />)}
                    </section>
                )
            }
        </>
    );
};

export default Page;
