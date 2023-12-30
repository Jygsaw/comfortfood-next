"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";
import Button from "app/_components/Button";

const AddArticleButton = () => {
    const router = useRouter();

    const handleAdd = () => createArticleDraft()
        .then(article => router.push(buildPath(PATH_TYPES.articleDraft, article.contentId)));

    return <Button onClick={handleAdd}>Add a new article</Button>;
};

export default AddArticleButton;
