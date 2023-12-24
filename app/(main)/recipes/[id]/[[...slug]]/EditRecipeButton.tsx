"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    contentId: string,
};

const EditRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => createRecipeDraft(contentId)
        .then(recipe => router.push(buildPath(PATH_TYPES.recipeDraft, recipe.contentId)));

    return (
        <div className="my-4 ">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleEdit}>
                Edit recipe
            </button>
        </div>
    );
};

export default EditRecipeButton;
