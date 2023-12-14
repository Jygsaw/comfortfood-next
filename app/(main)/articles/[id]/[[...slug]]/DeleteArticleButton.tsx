"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteArticle } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    id: string,
};

const DeleteArticleButton = ({ id }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticle(id)
        .then(() => router.push(buildPath(PATH_TYPES.article)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleDelete}>
                Delete article
            </button>
        </div>
    );
};

export default DeleteArticleButton;
