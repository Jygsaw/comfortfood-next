"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";
import ConfirmButton from "app/_components/ConfirmButton";

type Input = {
    contentId: string,
    draftContentId: string,
};

const DeleteArticleButton = ({ contentId, draftContentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticleDraft(contentId)
        .then(() => router.push(buildPath(contentId === draftContentId ? PATHS.cookbook : PATHS.article, contentId)));

    return (
        <ConfirmButton
            confirmTitle="Delete Draft Article"
            confirmBody="Are you sure you want to delete this draft article?"
            onPress={handleDelete}
        >Delete draft article</ConfirmButton>
    );
};

export default DeleteArticleButton;
