"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";
import Button from "app/_components/Button";

const AddRecipeButton = () => {
    const router = useRouter();

    const handleAdd = () => createRecipeDraft()
        .then(recipe => router.push(buildPath(PATHS.recipeDraft, recipe.contentId)));

    return <Button onClick={handleAdd}>Add a new recipe</Button>;
};

export default AddRecipeButton;
