"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

const AddRecipeButton = () => {
    const router = useRouter();

    const handleAdd = () => createRecipeDraft()
        .then(recipe => router.push(buildPath(PATH_TYPES.recipeDraft, recipe.id)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleAdd}>
            Add a new recipe
            </button>
        </div>
    );
};

export default AddRecipeButton;
