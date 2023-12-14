import React from "react";
import { getArticle } from "app/_lib/articlesAPI";

import type { DynamicRoute } from "app/_types/site";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const article = await getArticle(id);

    return (
        <article className="max-w-4xl mx-auto my-12">
            <h1 className="mb-2 text-4xl">{article.name}</h1>
            <p className="mb-4 text-2xl text-gray-600">{article.description}</p>
            <div className="my-4">
                <p className="text-small">By {article.createdBy}</p>
                <p className="text-small">Updated {article.updatedAt}</p>
            </div>
            <div className="my-6" dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
    );
};

export default Page;
