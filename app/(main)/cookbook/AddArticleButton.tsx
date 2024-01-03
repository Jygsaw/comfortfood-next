"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { createArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

const AddArticleButton = () => {
    const router = useRouter();

    const handleAdd = () => createArticleDraft()
        .then(article => router.push(buildPath(PATHS.articleDraft, article.contentId)));

    return <Button onPress={handleAdd}>Add a new article</Button>;
};

export default AddArticleButton;
