"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteRecipe } from "app/_lib/recipesAPI";
import ConfirmButton from "app/_components/ConfirmButton";

type Input = {
    contentId: string,
};

const DeleteRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipe(contentId)
        .then(() => router.push("/cookbook"));

    return (
        <ConfirmButton
            confirmTitle="Delete Recipe"
            confirmBody="Are you sure you want to delete this recipe?"
            onPress={handleDelete}
        >Delete recipe</ConfirmButton>
    );
};

export default DeleteRecipeButton;
