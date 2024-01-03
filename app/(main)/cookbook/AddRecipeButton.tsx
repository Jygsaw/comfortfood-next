"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { createRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

const AddRecipeButton = () => {
    const router = useRouter();

    const handleAdd = () => createRecipeDraft()
        .then(recipe => router.push(buildPath(PATHS.recipeDraft, recipe.contentId)));

    return <Button onPress={handleAdd}>Add a new recipe</Button>;
};

export default AddRecipeButton;
