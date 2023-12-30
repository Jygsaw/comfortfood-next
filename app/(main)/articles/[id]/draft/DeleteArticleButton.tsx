"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
    draftContentId: string,
};

const DeleteArticleButton = ({ contentId, draftContentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticleDraft(contentId)
        .then(() => router.push(buildPath(contentId === draftContentId ? PATH_TYPES.cookbook : PATH_TYPES.article, contentId)));

    return <Button onClick={handleDelete}>Delete draft</Button>;
};

export default DeleteArticleButton;
