"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { copyArticle } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
};

const CopyArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handleEdit = () => copyArticle(contentId)
        .then(article => router.push(buildPath(PATH_TYPES.articleDraft, article.draftOf)));

    return <Button onClick={handleEdit}>Copy article</Button>;
};

export default CopyArticleButton;
