"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { deleteArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

type Input = {
    contentId: string,
    draftContentId: string,
};

const DeleteArticleButton = ({ contentId, draftContentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticleDraft(contentId)
        .then(() => router.push(buildPath(contentId === draftContentId ? PATHS.cookbook : PATHS.article, contentId)));

    return <Button onPress={handleDelete}>Delete draft</Button>;
};

export default DeleteArticleButton;
