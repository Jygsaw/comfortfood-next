import sql from "app/_lib/db";
import { getAuth } from "app/_lib/auth";
import { generateRecipes } from "app/_lib/testUtils";
import { RESPONSES } from "app/api/_lib/routeUtils";

import type { NextRequest } from "next/server";

// TODO: remove this route after substituting calls with lists endpoint
export async function GET(request: NextRequest) {
    try {
        const q = request.nextUrl.searchParams.get("q") ?? "";

        const select = await sql`
            SELECT *
            FROM contents
            WHERE name like ${`%${q}%`}
        `;

        // TODO remove generateRecipes fallback after dev finished
        return Response.json({ data: { recipes: select.length ? select : generateRecipes(q.length) } });
        // return Response.json({ data: { recipes: select } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}

export async function POST() {
    const session = await getAuth();
    if (!session) return RESPONSES.UNAUTHORIZED;

    try {
        const insert = await sql`
            WITH init AS (SELECT gen_random_uuid() AS uuid)
            INSERT INTO contents (content_id, draft_of, type, created_by)
            SELECT uuid, uuid, 'recipe', ${session.user.userId}
            FROM init
            RETURNING *
        `;

        return Response.json({ data: { recipe: insert[0] } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
