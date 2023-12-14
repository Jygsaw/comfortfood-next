import { generateArticle } from "app/_lib/testUtils";

import type { DynamicRoute } from "app/_types/site";

export async function GET(_: never, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    const article = generateArticle({ id });
    if (!article) {
        return Response.json({ error: {
            code: 403,
            message: "Not found",
        } }, { status: 403 });
    }

    return Response.json({ data: { article } });
}

export async function POST(_: never, { params: { id } }: DynamicRoute) {
    // TODO: check if draft exists already for original recipe
    // TODO: connect to persistent storage
    let draft = generateArticle({ draftOf: id });

    if (!draft) {
        // TODO: fetch original article from persistent storage
        const article = generateArticle({ id });
        if (!article) {
            return Response.json({ error: {
                code: 403,
                message: "Not found",
            } }, { status: 403 });
        }

        // TODO: create draft based on original
        draft = generateArticle({ name: article.name, draftOf: article.id });
        // TODO: save draft to persistent storage
        if (draft && false) {
            return Response.json({ error: {
                code: 500,
                message: "Server error"
            } }, { status: 500 });
        }
    }

    return Response.json({ data: { article: draft } });
}

export async function DELETE(_: never, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    console.log("> deleting article where id:", id);

    return new Response(null, { status: 204 });
}
