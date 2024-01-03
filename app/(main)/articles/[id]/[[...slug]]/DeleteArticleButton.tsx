"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { deleteArticle } from "app/_lib/articlesAPI";

type Input = {
    contentId: string,
};

const DeleteArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticle(contentId)
        .then(() => router.push("/cookbook"));

    return <Button onPress={handleDelete}>Delete article</Button>;
};

export default DeleteArticleButton;
