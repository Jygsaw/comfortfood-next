"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { publishRecipeDraft } from "app/_lib/recipesAPI";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
    slug?: string,
}

const PublishRecipeButton = ({ contentId, slug }: Input) => {
    const router = useRouter();

    const handlePublish = () =>
        publishRecipeDraft(contentId)
            .then(() => router.push(buildPath(PATHS.recipe, contentId, slug)));

    return <Button color="primary" onPress={handlePublish}>Publish recipe</Button>;
};

export default PublishRecipeButton;
