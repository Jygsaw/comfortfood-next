import { generateRecipe } from "lib/testUtils";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const q = request.nextUrl.searchParams.get("q") ?? "";
    const recipes = new Array(q.length)
        .fill(null)
        .map((_, i) => generateRecipe(i.toString()));

    return Response.json({ data: { recipes } });
}
