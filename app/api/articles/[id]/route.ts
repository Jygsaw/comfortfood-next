import sql, { transformNull } from "app/_lib/db";

import type { DynamicRoute } from "app/_types/site";

export async function GET(_: never, { params: { id } }: DynamicRoute) {
    try {
        const select = await sql `
            SELECT *
            FROM contents
            WHERE content_id = ${id}
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

export async function POST(_: never, { params: { id } }: DynamicRoute) {
    try {
        const select = await sql `
            SELECT *
            FROM contents
            WHERE draft_of = ${id}
        `;

        if (select[0]) {
            return Response.json({ data: { article: transformNull(select[0]) } });
        }

        const insert = await sql `
            INSERT INTO contents (
                draft_of,
                name,
                slug,
                image_link,
                description,
                type,
                content
            )
            SELECT
                content_id,
                name,
                slug,
                image_link,
                description,
                type,
                content
            FROM contents
            WHERE content_id = ${id}
            RETURNING *
        `;

        if (!insert[0]) {
            return Response.json({ error: {
                code: 404,
                message: "Not found",
            } }, { status: 404 });
        }

        return Response.json({ data: { article: transformNull(insert[0]) } });
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
            WHERE content_id = ${id} or draft_of = ${id}
        `;

        return new Response(null, { status: 204 });
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}
