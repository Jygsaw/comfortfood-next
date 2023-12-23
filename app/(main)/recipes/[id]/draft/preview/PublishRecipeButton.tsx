"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { publishRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    contentId: string,
    slug?: string,
}

const PublishRecipeButton = ({ contentId, slug }: Input) => {
    const router = useRouter();

    const handlePublish = () =>
        publishRecipeDraft(contentId)
            .then(() => router.push(buildPath(PATH_TYPES.recipe, contentId, slug)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handlePublish}>
                Publish recipe
            </button>
        </div>
    );
};

export default PublishRecipeButton;
