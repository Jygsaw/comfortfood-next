import { generateArticle } from "app/_lib/testUtils";

import type { DynamicRoute } from "app/_types/site";

export async function GET(_: Request, { params: { id } }: DynamicRoute) {
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

export async function PATCH(request: Request, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    const article = generateArticle({ id });
    if (!article) {
        return Response.json({ error: {
            code: 403,
            message: "Not found",
        } }, { status: 403 });
    }

    const data = await request.json();
    // TODO: validate data
    if (false) {
        return Response.json({ error: {
            code: 400,
            message: "Invalid data",
        } }, { status: 400 });
    }

    const newArticle = {
        ...article,
        ...data,
    };
    // TODO: connect to persistent storage
    if (false) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }

    return Response.json({ data: { article: newArticle } });
}

export async function DELETE(_: Request, { params: { id } }: DynamicRoute) {
    // TODO: connect to persistent storage
    console.log("> deleting:", id);

    return new Response(null, { status: 204 });
}
