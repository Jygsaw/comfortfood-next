import sql from "app/_db/db";
import { getAuth } from "app/_lib/auth";
import { RESPONSES } from "app/api/_lib/routeUtils";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getAuth();

    try {
        const params = Object.fromEntries(request.nextUrl.searchParams);

        const select = await sql`
            SELECT *
            FROM contents
            WHERE
                name ILIKE ${`%${params.q ?? ""}%`}
                AND (draft_of IS NULL
                    ${session ? sql`OR created_by = ${session.user.userId}` : sql``}
                )
                ${params.type ? sql`AND type = ${params.type}` : sql``}
                ${params.createdBy ? sql`AND created_by = ${params.createdBy}` : sql``}
            ${params.limit ? sql`LIMIT ${params.limit}` : sql``}
        `;

        return Response.json({ data: { list: select } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
