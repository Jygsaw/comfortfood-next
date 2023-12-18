import sql, { transformNull } from "app/_lib/db";

export async function POST() {
    try {
        const insert = await sql `
            WITH init AS (SELECT uuid_generate_v4() AS uuid)
            INSERT INTO contents (content_id, draft_of, type)
            SELECT uuid, uuid, 'article'
            FROM init
            RETURNING *
        `;

        return Response.json({ data: { article: transformNull(insert[0]) } });
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}
