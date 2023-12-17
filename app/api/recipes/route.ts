import { generateRecipe } from "app/_lib/testUtils";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const q = request.nextUrl.searchParams.get("q") ?? "";

    // TODO: connect to persistent storage
    const recipes = new Array(q.length)
        .fill(null)
        .map(() => generateRecipe());

    return Response.json({ data: { recipes } });
}

export async function POST() {
    const recipe = generateRecipe();
    const draft = {
        ...recipe,
        draftOf: recipe.contentId,
    };

    // TODO: save draft to persistent storage
    if (false) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }

    return Response.json({ data: { recipe: draft } });
}
