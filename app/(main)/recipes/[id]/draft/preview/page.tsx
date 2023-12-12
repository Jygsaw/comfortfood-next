import React from "react";
import { getRecipeDraft } from "app/_lib/recipesAPI";
import PublishRecipeButton from "./PublishRecipeButton";

import type { DynamicRoute } from "app/_types/next";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const recipe = await getRecipeDraft(id);

    return (
        <>
            <PublishRecipeButton draftOf={recipe.draftOf} />
            <pre>{JSON.stringify(recipe, null, 4)}</pre>
        </>
    );
};

export default Page;
