"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteArticle } from "app/_lib/articlesAPI";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
};

const DeleteArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticle(contentId)
        .then(() => router.push("/cookbook"));

    return <Button onClick={handleDelete}>Delete article</Button>;
};

export default DeleteArticleButton;
