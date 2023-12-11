import { generateArticle } from "app/_lib/testUtils";

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
    const article = generateArticle({
        name: data.name,
        description: data.description,
        imageLink: data.imageLink,
    });

    return Response.json({ data: {
        article
    } }, { status: 201 });
}
