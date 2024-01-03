"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { editArticle } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

type Input = {
    contentId: string,
};

const EditArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => editArticle(contentId)
        .then(article => router.push(buildPath(PATHS.articleDraft, article.draftOf)));

    return <Button onPress={handleEdit}>Edit article</Button>;
};

export default EditArticleButton;
