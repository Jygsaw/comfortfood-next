import { generateArticle } from "app/_lib/testUtils";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) return Response.error();

    return Response.json({ data: { article: generateArticle({ id }) } });
}
