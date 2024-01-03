"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { copyRecipe } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

type Input = {
    contentId: string,
};

const CopyRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => copyRecipe(contentId)
        .then(recipe => router.push(buildPath(PATHS.recipeDraft, recipe.draftOf)));

    return <Button onPress={handleEdit}>Copy recipe</Button>;
};

export default CopyRecipeButton;
