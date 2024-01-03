"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteArticle } from "app/_lib/articlesAPI";
import ConfirmButton from "app/_components/ConfirmButton";

type Input = {
    contentId: string,
};

const DeleteArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleDelete = () => deleteArticle(contentId)
        .then(() => router.push("/cookbook"));

    return (
        <ConfirmButton
            confirmTitle="Delete Article"
            confirmBody="Are you sure you want to delete this article?"
            onPress={handleDelete}
        >Delete article</ConfirmButton>
    );
};

export default DeleteArticleButton;
