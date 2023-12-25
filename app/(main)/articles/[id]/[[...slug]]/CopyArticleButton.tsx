"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { copyArticle } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    contentId: string,
};

const CopyArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => copyArticle(contentId)
        .then(article => router.push(buildPath(PATH_TYPES.articleDraft, article.draftOf)));

    return (
        <div className="my-4 ">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleEdit}>
                Copy article
            </button>
        </div>
    );
};

export default CopyArticleButton;
