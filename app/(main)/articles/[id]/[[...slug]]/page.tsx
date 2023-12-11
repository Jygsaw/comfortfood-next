import React from "react";
import { getArticle } from "app/_lib/articlesAPI";

import type { DynamicRoute } from "app/_types/next";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const article = await getArticle(id);

    return (
        <article className="m-12">
            <h1>{article.name}</h1>
            <p>{article.description}</p>
            <p>{article.createdBy}</p>
            <p>{article.updatedAt}</p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
    );
};

export default Page;
