import sql from "app/_lib/db";
import { generateRecipes } from "app/_lib/testUtils";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const q = request.nextUrl.searchParams.get("q") ?? "";

        const select = await sql `
            SELECT *
            FROM contents
            WHERE name like ${`%${q}%`}
        `;

        // TODO remove generateRecipes fallback after dev finished
        return Response.json({ data: { recipes: select.length ? select : generateRecipes(q.length) } });
        // return Response.json({ data: { recipes: select } });
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}

export async function POST() {
    try {
        const insert = await sql `
            WITH init AS (SELECT uuid_generate_v4() AS uuid)
            INSERT INTO contents (content_id, draft_of, type)
            SELECT uuid, uuid, 'recipe'
            FROM init
            RETURNING *
        `;

        return Response.json({ data: { recipe: insert[0] } });
    } catch (error) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }
}
