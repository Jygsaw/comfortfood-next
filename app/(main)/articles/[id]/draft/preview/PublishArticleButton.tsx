"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { publishArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    contentId: string,
    slug?: string,
}

const PublishArticleButton = ({ contentId, slug }: Input) => {
    const router = useRouter();

    const handlePublish = () =>
        publishArticleDraft(contentId)
            .then(() => router.push(buildPath(PATH_TYPES.article, contentId, slug)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handlePublish}>
                Publish article
            </button>
        </div>
    );
};

export default PublishArticleButton;
