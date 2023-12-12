"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteRecipe } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";

type Input = {
    id: string,
};

const DeleteRecipeButton = ({ id }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipe(id)
        .then(() => router.push(buildPath("recipe")));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleDelete}>
                Delete recipe
            </button>
        </div>
    );
};

export default DeleteRecipeButton;
