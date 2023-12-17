"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteRecipe } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    contentId: string,
};

const DeleteRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipe(contentId)
        .then(() => router.push(buildPath(PATH_TYPES.recipe)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleDelete}>
                Delete recipe
            </button>
        </div>
    );
};

export default DeleteRecipeButton;
