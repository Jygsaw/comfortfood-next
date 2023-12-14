"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    id: string,
};

const EditArticleButton = ({ id }: Input) => {
    const router = useRouter();

    const handleEdit = () => createArticleDraft(id)
        .then(() => router.push(buildPath(PATH_TYPES.articleDraft, id)));

    return (
        <div className="my-4 ">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleEdit}>
                Edit article
            </button>
        </div>
    );
};

export default EditArticleButton;
