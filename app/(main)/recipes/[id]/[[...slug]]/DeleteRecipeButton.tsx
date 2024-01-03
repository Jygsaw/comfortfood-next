"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { deleteRecipe } from "app/_lib/recipesAPI";

type Input = {
    contentId: string,
};

const DeleteRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteRecipe(contentId)
        .then(() => router.push("/cookbook"));

    return <Button onPress={handleDelete}>Delete recipe</Button>;
};

export default DeleteRecipeButton;
