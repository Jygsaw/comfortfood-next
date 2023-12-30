"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { editRecipe } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
};

const EditRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => editRecipe(contentId)
        .then(recipe => router.push(buildPath(PATHS.recipeDraft, recipe.draftOf)));

    return <Button onClick={handleEdit}>Edit recipe</Button>;
};

export default EditRecipeButton;
