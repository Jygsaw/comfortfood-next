"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    contentId: string,
    draftContentId: string,
};

const DeleteArticleButton = ({ contentId, draftContentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticleDraft(contentId)
        .then(() => router.push(contentId === draftContentId ? "/cookbook" : buildPath(PATH_TYPES.article, contentId)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleDelete}>
                Delete draft
            </button>
        </div>
    );
};

export default DeleteArticleButton;
