"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
}

const PreviewRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handlePreview = () => router.push(buildPath(PATH_TYPES.recipePreview, contentId));

    return <Button onClick={handlePreview}>Preview draft</Button>;
};

export default PreviewRecipeButton;
