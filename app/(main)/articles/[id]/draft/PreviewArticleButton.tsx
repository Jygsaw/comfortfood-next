"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { buildPath } from "app/_lib/siteUtils";
import { PATH_TYPES } from "app/_lib/constants";

type Input = {
    id: string,
}

const PreviewArticleButton = ({ id }: Input) => {
    const router = useRouter();

    const handlePreview = () => router.push(buildPath(PATH_TYPES.articlePreview, id));

    return (
        <div className="my-4">
            <button className="w-40 h-12 bg-blue-300 rounded" onClick={handlePreview}>
                Preview draft
            </button>
        </div>
    );
};

export default PreviewArticleButton;
