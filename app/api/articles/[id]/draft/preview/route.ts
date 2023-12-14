import { generateArticle } from "app/_lib/testUtils";

import type { DynamicRoute } from "app/_types/site";

export async function PATCH(_: never, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    // TODO: retrieve article from db where draftOf = id
    const draft = generateArticle({ draftOf: id });
    if (!draft) {
        return Response.json({ error: {
            code: 403,
            message: "Not found",
        } }, { status: 403 });
    }

    // TODO: refine logic flow
    const shouldDelete = draft.draftOf !== draft.id;
    const { draftOf, ...article } = draft;
    article.id = draftOf;

    // TODO: save article to persistent storage where ID = article.id
    if (article && false) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }

    // TODO: delete draft from database where id = draft.id
    console.log("> possibly deleting article where ID is:", draft.id);
    if (shouldDelete && false) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }

    return new Response(null, { status: 204 });
}
