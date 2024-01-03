"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

type Input = {
    contentId: string,
}

const PreviewRecipeButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handlePreview = () => router.push(buildPath(PATHS.recipePreview, contentId));

    return <Button onPress={handlePreview}>Preview draft</Button>;
};

export default PreviewRecipeButton;
