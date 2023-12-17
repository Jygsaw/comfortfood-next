import React from "react";
import { getArticleDraft } from "app/_lib/articlesAPI";
import PublishArticleButton from "./PublishArticleButton";

import type { DynamicRoute } from "app/_types/site";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const article = await getArticleDraft(id);

    return (
        <>
            <PublishArticleButton contentId={id} slug={article.slug} />
            <pre>{JSON.stringify(article, null, 4)}</pre>
        </>
    );
};

export default Page;
