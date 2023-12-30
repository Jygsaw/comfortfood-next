"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
    draftContentId: string,
};

const DeleteRecipeButton = ({ contentId, draftContentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipeDraft(contentId)
        .then(() => router.push(contentId === draftContentId ? "/cookbook" : buildPath(PATH_TYPES.recipe, contentId)));

    return <Button onClick={handleDelete}>Delete draft</Button>;
};

export default DeleteRecipeButton;
