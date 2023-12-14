"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { publishArticleDraft } from "app/_lib/articlesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    draftOf: string,
    slug?: string,
}

const PublishArticleButton = ({ draftOf, slug }: Input) => {
    const router = useRouter();

    const handlePublish = () =>
        publishArticleDraft(draftOf)
            .then(() => router.push(buildPath(PATH_TYPES.article, draftOf, slug)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handlePublish}>
                    Publish article
            </button>
        </div>
    );
};

export default PublishArticleButton;
