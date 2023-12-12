import React from "react";
import { getRecipe } from "app/_lib/recipesAPI";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeButton from "./EditRecipeButton";

import type { DynamicRoute } from "app/_types/next";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const recipe = await getRecipe(id);

    return (
        <>
            <EditRecipeButton {...{ id }} />
            <DeleteRecipeButton {...{ id }} />
            <pre>{JSON.stringify(recipe, null, 4)}</pre>
        </>
    );
};

export default Page;
