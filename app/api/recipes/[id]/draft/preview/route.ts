import { generateRecipe } from "app/_lib/testUtils";

import type { DynamicRoute } from "app/_types/site";

export async function PATCH(_: never, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    // TODO: retrieve recipe from db where draftOf = id
    const draft = generateRecipe({ draftOf: id });
    if (!draft) {
        return Response.json({ error: {
            code: 403,
            message: "Not found",
        } }, { status: 403 });
    }

    // TODO: refine logic flow
    const shouldDelete = draft.draftOf !== draft.contentId;
    const { draftOf, ...recipe } = draft;
    recipe.contentId = draftOf;

    // TODO: save recipe to persistent storage where ID = recipe.id
    if (recipe && false) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }

    // TODO: delete draft from database where id = draft.id
    console.log("> possibly deleting recipe where ID is:", draft.contentId);
    if (shouldDelete && false) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }

    return new Response(null, { status: 204 });
}
