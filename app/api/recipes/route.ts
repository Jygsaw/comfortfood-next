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

export async function POST(request: Request) {
    const data = await request.json();

    // TODO: validate data
    if (false) {
        return Response.json({ error: {
            code: 400,
            message: "Invalid data",
        } }, { status: 400 });
    }

    // TODO: connect to persistent storage
    const recipe = generateRecipe({
        name: data.name,
        description: data.description,
        imageLink: data.imageLink,
    });

    return Response.json({ data: {
        recipe
    } }, { status: 201 });
}
