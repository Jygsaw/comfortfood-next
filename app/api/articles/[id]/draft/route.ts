import sql, { transformNull } from "app/_lib/db";

import type { DynamicRoute } from "app/_types/site";

export async function GET(_: Request, { params: { id } }: DynamicRoute) {
    try {
        const select = await sql `
            SELECT *
            FROM contents
            WHERE draft_of = ${id}
        `;

        if (!select[0]) {
            return Response.json({ error: {
                code: 404,
                message: "Not found",
            } }, { status: 404 });
        }

        return Response.json({ data: { article: transformNull(select[0]) } });
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}

export async function PATCH(request: Request, { params: { id } }: DynamicRoute) {
    const ALLOWED_CHANGES = ["name", "description", "imageLink"];

    try {
        const data = await request.json();
        const cleaned: Record<string, string> = ALLOWED_CHANGES.reduce((prev, col) => ({
            ...prev,
            [col]: data[col],
        }), {});

        const update = await sql `
            UPDATE contents
            SET ${sql(cleaned, Object.keys(cleaned))}
            WHERE draft_of = ${id}
            RETURNING *
        `;

        if (!update[0]) {
            return Response.json({ error: {
                code: 404,
                message: "Not found",
            } }, { status: 404 });
        }

        return Response.json({ data: { article: transformNull(update[0]) } });
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}

export async function DELETE(_: never, { params: { id } }: DynamicRoute) {
    try {
        await sql `
            DELETE
            FROM contents
            WHERE draft_of = ${id}
        `;

        return new Response(null, { status: 204 });
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}
