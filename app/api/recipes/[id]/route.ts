import { generateRecipe } from "app/_lib/testUtils";

import type { DynamicRoute } from "app/_types/next";

export async function GET(_: never, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    const recipe = generateRecipe({ id });
    if (!recipe) {
        return Response.json({ error: {
            code: 403,
            message: "Not found",
        } }, { status: 403 });
    }

    return Response.json({ data: { recipe } });
}

export async function POST(_: never, { params: { id } }: DynamicRoute) {
    // TODO: check if draft exists already for original recipe
    // TODO: connect to persistent storage
    let draft = generateRecipe({ draftOf: id });

    if (!draft) {
        // TODO: fetch original recipe from persistent storage
        const recipe = generateRecipe({ id });
        if (!recipe) {
            return Response.json({ error: {
                code: 403,
                message: "Not found",
            } }, { status: 403 });
        }

        // TODO: create draft based on original
        draft = generateRecipe({ name: recipe.name, draftOf: recipe.id });
        // TODO: save draft to persistent storage
        if (draft && false) {
            return Response.json({ error: {
                code: 500,
                message: "Server error"
            } }, { status: 500 });
        }
    }

    return Response.json({ data: { recipe: draft } });
}

export async function DELETE(_: never, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    console.log("> deleting recipe where ID is:", id);

    return new Response(null, { status: 204 });
}
