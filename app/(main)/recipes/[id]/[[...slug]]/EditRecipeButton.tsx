"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { editRecipe } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

type Input = {
    contentId: string,
};

const EditRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => editRecipe(contentId)
        .then(recipe => router.push(buildPath(PATHS.recipeDraft, recipe.draftOf)));

    return <Button onPress={handleEdit}>Edit recipe</Button>;
};

export default EditRecipeButton;
