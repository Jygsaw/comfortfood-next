import sql from "app/_lib/db";
import { getAuth } from "app/_lib/auth";
import { RESPONSES } from "app/api/_lib/routeUtils";

import type { DynamicRoute } from "app/_types/site";

const ALLOWED_CHANGES = ["name", "slug", "description", "imageLink", "content"];

export async function GET(_: never, { params: { id } }: DynamicRoute) {
    const session = await getAuth();
    if (!session) return RESPONSES.UNAUTHORIZED;

    try {
        const select = await sql`
            SELECT *
            FROM contents
            WHERE draft_of::text = ${id}
                AND created_by = ${session.user.userId}
        `;

        if (!select[0]) return RESPONSES.NOT_FOUND;

        return Response.json({ data: { recipe: select[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}

export async function PATCH(request: Request, { params: { id } }: DynamicRoute) {
    const session = await getAuth();
    if (!session) return RESPONSES.UNAUTHORIZED;

    try {
        const data = await request.json();
        const cleaned: Record<string, string> = ALLOWED_CHANGES.reduce((prev, col) => ({
            ...prev,
            ...(data[col] !== undefined ? { [col]: data[col] } : {}),
        }), {});

        const update = await sql`
            UPDATE contents
            SET ${sql(cleaned, Object.keys(cleaned))}
            WHERE draft_of::text = ${id}
                AND created_by = ${session.user.userId}
            RETURNING *
        `;

        if (!update[0]) return RESPONSES.NOT_FOUND;

        return Response.json({ data: { recipe: update[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}

export async function DELETE(_: never, { params: { id } }: DynamicRoute) {
    const session = await getAuth();
    if (!session) return RESPONSES.UNAUTHORIZED;

    try {
        await sql`
            DELETE
            FROM contents
            WHERE draft_of::text = ${id}
                AND created_by = ${session.user.userId}
        `;

        return RESPONSES.NO_CONTENT;
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
