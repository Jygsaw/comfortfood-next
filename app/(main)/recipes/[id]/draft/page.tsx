import React from "react";
import { getRecipeDraft } from "app/_lib/recipesAPI";
import DeleteRecipeButton from "./DeleteRecipeButton";
import PreviewRecipeButton from "./PreviewRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

import type { DynamicRoute } from "app/_types/site";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const draft = await getRecipeDraft(id);

    return (
        <>
            <PreviewRecipeButton contentId={id} />
            <DeleteRecipeButton contentId={id} draftContentId={draft.contentId} />
            <EditRecipeForm contentId={id} draft={draft} />
        </>
    );
};

export default Page;
