"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { buildPath } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";
import Button from "app/_components/Button";

type Input = {
    contentId: string,
}

const PreviewArticleButton = ({ contentId }: Input) => {
    const router = useRouter();

    const handlePreview = () => router.push(buildPath(PATHS.articlePreview, contentId));

    return <Button color="primary" onPress={handlePreview}>Preview draft</Button>;
};

export default PreviewArticleButton;
