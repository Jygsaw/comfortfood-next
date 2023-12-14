"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { publishRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    draftOf: string,
    slug?: string,
}

const PublishRecipeButton = ({ draftOf, slug }: Input) => {
    const router = useRouter();

    const handlePublish = () =>
        publishRecipeDraft(draftOf)
            .then(() => router.push(buildPath(PATH_TYPES.recipe, draftOf, slug)));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handlePublish}>
                    Publish recipe
            </button>
        </div>
    );
};

export default PublishRecipeButton;
