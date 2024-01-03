"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { publishArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

type Input = {
    contentId: string,
    slug?: string,
}

const PublishArticleButton = ({ contentId, slug }: Input) => {
    const router = useRouter();

    const handlePublish = () =>
        publishArticleDraft(contentId)
            .then(() => router.push(buildPath(PATHS.article, contentId, slug)));

    return <Button onPress={handlePublish}>Publish article</Button>;
};

export default PublishArticleButton;
