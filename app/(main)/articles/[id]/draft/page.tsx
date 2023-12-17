import React from "react";
import { getArticleDraft } from "app/_lib/articlesAPI";
import DeleteArticleButton from "./DeleteArticleButton";
import PreviewArticleButton from "./PreviewArticleButton";
import EditArticleForm from "./EditArticleForm";

import type { DynamicRoute } from "app/_types/site";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const draft = await getArticleDraft(id);

    return (
        <>
            <PreviewArticleButton contentId={id} />
            <DeleteArticleButton contentId={id} draftOf={draft.draftOf} />
            <EditArticleForm contentId={id} draft={draft} />
        </>
    );
};

export default Page;
