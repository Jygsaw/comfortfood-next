"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";

type Input = {
    id: string,
};

const EditRecipeButton = ({ id }: Input) => {
    const router = useRouter();

    const handleEdit = () => createRecipeDraft(id)
        .then(() => router.push(buildPath("recipeDraft", id)));

    return (
        <div className="my-4 ">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handleEdit}>
                Edit recipe
            </button>
        </div>
    );
};

export default EditRecipeButton;
