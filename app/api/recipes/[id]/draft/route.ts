import sql from "app/_lib/db";
import { RESPONSES } from "app/api/_lib/routeUtils";

import type { DynamicRoute } from "app/_types/site";

export async function GET(_: never, { params: { id } }: DynamicRoute) {
    try {
        const select = await sql `
            SELECT *
            FROM contents
            WHERE draft_of = ${id}
        `;

        if (!select[0]) return RESPONSES.NOT_FOUND;

        return Response.json({ data: { recipe: select[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
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

        if (!update[0]) return RESPONSES.NOT_FOUND;

        return Response.json({ data: { recipe: update[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
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
        return RESPONSES.SERVER_ERROR;
    }
}
