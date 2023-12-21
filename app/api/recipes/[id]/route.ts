import sql from "app/_db/db";
import { RESPONSES } from "app/api/_lib/routeUtils";

import type { DynamicRoute } from "app/_types/site";

export async function GET(_: never, { params: { id } }: DynamicRoute) {
    try {
        const select = await sql `
            SELECT *
            FROM contents
            WHERE content_id = ${id}
        `;

        if (!select[0]) return RESPONSES.NOT_FOUND;

        return Response.json({ data: { recipe: select[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
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
            return Response.json({ data: { recipe: select[0] } });
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

        if (!insert[0]) return RESPONSES.NOT_FOUND;

        return Response.json({ data: { recipe: insert[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}

export async function DELETE(_: never, { params: { id } }: DynamicRoute) {
    try {
        await sql `
            DELETE
            FROM contents
            WHERE content_id = ${id} or draft_of = ${id}
        `;

        return RESPONSES.NO_CONTENT;
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
