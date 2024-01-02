import sql from "app/_lib/db";
import { getAuth } from "app/_lib/auth";
import { RESPONSES } from "app/api/_lib/routeUtils";

export async function POST() {
    const session = await getAuth();
    if (!session) return RESPONSES.UNAUTHORIZED;

    try {
        const insert = await sql`
            WITH init AS (SELECT gen_random_uuid() AS uuid)
            INSERT INTO contents (content_id, draft_of, type, created_by)
            SELECT uuid, uuid, 'article', ${session.user.userId}
            FROM init
            RETURNING *
        `;

        return Response.json({ data: { article: insert[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
