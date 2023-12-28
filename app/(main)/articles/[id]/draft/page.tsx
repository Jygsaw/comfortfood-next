import React from "react";
import { getArticleDraft } from "app/_lib/articlesAPI";
import EditArticleForm from "./EditArticleForm";

import type { DynamicRoute } from "app/_types/site";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const draft = await getArticleDraft(id);

    return <EditArticleForm contentId={id} draft={draft} />;
};

export default Page;
