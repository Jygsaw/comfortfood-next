"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { deleteRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

type Input = {
    contentId: string,
    draftContentId: string,
};

const DeleteRecipeButton = ({ contentId, draftContentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipeDraft(contentId)
        .then(() => router.push(contentId === draftContentId ? "/cookbook" : buildPath(PATHS.recipe, contentId)));

    return <Button onPress={handleDelete}>Delete draft</Button>;
};

export default DeleteRecipeButton;
