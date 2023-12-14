"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    id: string,
};

const DeleteArticleButton = ({ id }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticleDraft(id)
        .then(() => router.push(buildPath(PATH_TYPES.article, id)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleDelete}>
                Delete draft
            </button>
        </div>
    );
};

export default DeleteArticleButton;
