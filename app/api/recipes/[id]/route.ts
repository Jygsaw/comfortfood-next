import sql from "app/_db/db";
import { getAuth } from "app/_lib/auth";
import { RESPONSES } from "app/api/_lib/routeUtils";

import type { DynamicRoute } from "app/_types/site";

export async function GET(_: never, { params: { id } }: DynamicRoute) {
    const session = await getAuth();

    try {
        const select = await sql`
            SELECT *
            FROM contents
            WHERE content_id::text = ${id}
                AND (draft_of IS NULL
                    ${session ? sql`OR created_by = ${session.user.userId}` : sql``}
                )
        `;

        if (!select[0]) return RESPONSES.NOT_FOUND;

        return Response.json({ data: { recipe: select[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}

export async function POST(_: never, { params: { id } }: DynamicRoute) {
    const session = await getAuth();
    if (!session) return RESPONSES.UNAUTHORIZED;

    try {
        const draft = await sql`
            SELECT *
            FROM contents
            WHERE draft_of::text = ${id}
                AND created_by = ${session.user.userId}
        `;

        if (draft[0]) {
            return Response.json({ data: { recipe: draft[0] } });
        }

        const source = await sql`
            SELECT
                created_by,
                type,
                name,
                slug,
                image_link,
                description,
                content
            FROM contents
            WHERE content_id::text = ${id}
                AND draft_of IS NULL
        `;

        if (!source[0]) return RESPONSES.NOT_FOUND;

        const data = {
            ...source[0],
            createdBy: session.user.userId,
        };

        if (source[0].createdBy === session.user.userId) {
            const insert = await sql`
                INSERT INTO contents(
                    draft_of,
                    created_by,
                    type,
                    name,
                    slug,
                    image_link,
                    description,
                    content
                )
                SELECT
                    ${id},
                    ${sql(data)}
                RETURNING *
            `;

            return Response.json({ data: { recipe: insert[0] } });
        } else {
            const insert = await sql`
                WITH init AS (SELECT gen_random_uuid() AS uuid)
                INSERT INTO contents (
                    content_id,
                    draft_of,
                    copied_from,
                    created_by,
                    type,
                    name,
                    slug,
                    image_link,
                    description,
                    content
                )
                SELECT
                    uuid,
                    uuid,
                    ${id},
                    ${sql(data)}
                FROM init
                RETURNING *
            `;

            return Response.json({ data: { recipe: insert[0] } });
        }
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
            WHERE (content_id::text = ${id} OR draft_of::text = ${id})
                AND created_by = ${session.user.userId}
        `;

        return RESPONSES.NO_CONTENT;
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
