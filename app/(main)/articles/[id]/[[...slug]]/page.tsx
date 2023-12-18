import React from "react";
import Image from "next/image";
import { getArticle } from "app/_lib/articlesAPI";
import DeleteArticleButton from "./DeleteArticleButton";
import EditArticleButton from "./EditArticleButton";

import type { DynamicRoute } from "app/_types/site";

// TODO: remove mock data fallback after dev complete
import { MOCK_ARTICLE } from "app/_lib/mockArticle";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const article = await getArticle(id);

    return (
        <>
            <EditArticleButton contentId={id} />
            <DeleteArticleButton contentId={id} />

            <article className="max-w-4xl mx-auto my-12">
                <h1 className="mb-2 text-4xl">{article.name}</h1>
                <p className="mb-4 text-2xl text-gray-600">{article.description}</p>
                <div className="my-4">
                    <p className="text-small">By {article.createdBy ?? MOCK_ARTICLE.createdBy}</p>
                    <p className="text-small">Updated {article.updatedAt}</p>
                </div>
                <div className="relative w-full aspect-[1.5]">
                    <Image src={article.imageLink} alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
                </div>
                <div className="my-6" dangerouslySetInnerHTML={{ __html: article.content ?? MOCK_ARTICLE.content }} />
            </article>

            <pre>{JSON.stringify(article, null, 4)}</pre>
        </>
    );
};

export default Page;
