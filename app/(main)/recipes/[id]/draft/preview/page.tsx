import React from "react";
import { getRecipeDraft } from "app/_lib/recipesAPI";
import PublishRecipeButton from "./PublishRecipeButton";

import type { DynamicRoute } from "app/_types/site";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const recipe = await getRecipeDraft(id);

    return (
        <>
            <PublishRecipeButton contentId={id} slug={recipe.slug} />
            <pre>{JSON.stringify(recipe, null, 4)}</pre>
        </>
    );
};

export default Page;
