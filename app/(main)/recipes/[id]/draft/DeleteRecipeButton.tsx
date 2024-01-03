"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";
import ConfirmButton from "app/_components/ConfirmButton";

type Input = {
    contentId: string,
    draftContentId: string,
};

const DeleteRecipeButton = ({ contentId, draftContentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipeDraft(contentId)
        .then(() => router.push(contentId === draftContentId ? "/cookbook" : buildPath(PATHS.recipe, contentId)));

    return (
        <ConfirmButton
            confirmTitle="Delete Draft Recipe"
            confirmBody="Are you sure you want to delete this draft recipe?"
            onPress={handleDelete}
        >Delete draft recipe</ConfirmButton>
    );
};

export default DeleteRecipeButton;
