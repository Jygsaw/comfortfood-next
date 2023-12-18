import React from "react";
import Image from "next/image";
import { getRecipe } from "app/_lib/recipesAPI";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeButton from "./EditRecipeButton";

import type { DynamicRoute } from "app/_types/site";

// TODO: remove mock data fallback after dev complete
import { MOCK_RECIPE } from "app/_lib/mockRecipe";

const Page = async ({ params: { id } }: DynamicRoute) => {
    const recipe = await getRecipe(id);

    return (
        <>
            <EditRecipeButton contentId={id} />
            <DeleteRecipeButton contentId={id} />

            <article className="max-w-4xl mx-auto my-12">
                <h1 className="mb-2 text-4xl">{recipe.name}</h1>
                <p className="mb-4 text-2xl text-gray-600">{recipe.description}</p>
                <div className="my-4">
                    <p className="text-small">By {recipe.createdBy ?? MOCK_RECIPE.createdBy}</p>
                    <p className="text-small">Updated {recipe.updatedAt}</p>
                </div>
                <div className="relative w-full aspect-[1.5]">
                    <Image src={recipe.imageLink} alt="" fill sizes="33vw" style={{ objectFit: "contain" }} />
                </div>
                <div className="my-6" dangerouslySetInnerHTML={{ __html: recipe.content ?? MOCK_RECIPE.content }} />
            </article>

            <pre>{JSON.stringify(recipe, null, 4)}</pre>
        </>
    );
};

export default Page;
