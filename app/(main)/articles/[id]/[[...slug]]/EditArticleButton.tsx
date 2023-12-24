"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    contentId: string,
};

const EditArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => createArticleDraft(contentId)
        .then(article => router.push(buildPath(PATH_TYPES.articleDraft, article.contentId)));

    return (
        <div className="my-4 ">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleEdit}>
                Edit article
            </button>
        </div>
    );
};

export default EditArticleButton;
