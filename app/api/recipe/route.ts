import { generateRecipe } from "app/_lib/testUtils";

import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const recipe = generateRecipe({
        name: data.name,
        description: data.description,
        imageLink: data.imageLink,
    });

    return Response.json({ data: { recipe } });
}
