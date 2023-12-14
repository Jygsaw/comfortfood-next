"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

const AddArticleButton = () => {
    const router = useRouter();

    const handleAdd = () => createArticleDraft()
        .then(article => router.push(buildPath(PATH_TYPES.articleDraft, article.id)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleAdd}>
            Add a new article
            </button>
        </div>
    );
};

export default AddArticleButton;
