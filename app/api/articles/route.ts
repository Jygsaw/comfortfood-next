import { generateArticle } from "app/_lib/testUtils";

export async function POST() {
    const article = generateArticle();
    const draft = {
        ...article,
        draftOf: article.id,
    };

    // TODO: save draft to persistent storage
    if (false) {
        return Response.json({ error: {
            code: 500,
            message: "Server error"
        } }, { status: 500 });
    }

    return Response.json({ data: { article: draft } });
}
