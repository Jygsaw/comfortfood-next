import sql from "app/_lib/db";

import type { DynamicRoute } from "app/_types/site";

function publishCheck(draft: any) {
    return draft.name && draft.description && draft.imageLink;
}

export async function PATCH(_: never, { params: { id } }: DynamicRoute) {
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
        } else if (!publishCheck(select[0])) {
            return Response.json({ error: {
                code: 422,
                message: "Invalid data",
            } }, { status: 422 });
        }

        if (select[0].draftOf === select[0].contentId) {
            await sql `
                UPDATE contents
                SET draft_of = null
                WHERE draft_of = ${id}
            `;

            return new Response(null, { status: 204 });
        } else {
            await sql `
                WITH draft AS (
                    SELECT *
                    FROM contents
                    WHERE draft_of = ${id}
                )
                UPDATE contents
                SET
                    draft_of = null,
                    name = draft.name,
                    slug = draft.slug,
                    image_link = draft.image_link,
                    description = draft.description,
                    content = draft.content
                FROM draft
                WHERE contents.content_id = ${id}
            `;

            await sql `
                DELETE
                FROM contents
                WHERE draft_of = ${id}
            `;

            return new Response(null, { status: 204 });
        }
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}
