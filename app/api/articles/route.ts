import sql from "app/_db/db";
import { RESPONSES } from "app/api/_lib/routeUtils";

export async function POST() {
    try {
        const insert = await sql `
            WITH init AS (SELECT gen_random_uuid() AS uuid)
            INSERT INTO contents (content_id, draft_of, type)
            SELECT uuid, uuid, 'article'
            FROM init
            RETURNING *
        `;

        return Response.json({ data: { article: insert[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
