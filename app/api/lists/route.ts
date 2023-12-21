import sql from "app/_db/db";
import { RESPONSES } from "app/api/_lib/routeUtils";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const params = Object.fromEntries(request.nextUrl.searchParams);

        const select = await sql`
            SELECT *
            FROM contents
            WHERE
                name ILIKE ${`%${params.q ?? ""}%`}
                ${params.type ? sql`AND type = ${params.type}` : sql``}
            ${params.limit ? sql`LIMIT ${params.limit}` : sql``}
        `;

        return Response.json({ data: { list: select } });
    } catch (error) {
        return RESPONSES.SERVER_ERROR;
    }
}
