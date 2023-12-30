"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteRecipe } from "app/_lib/recipesAPI";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
};

const DeleteRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipe(contentId)
        .then(() => router.push("/cookbook"));

    return <Button onClick={handleDelete}>Delete recipe</Button>;
};

export default DeleteRecipeButton;
