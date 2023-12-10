import { buildUrl } from "./siteUtils";

import type { Article } from "app/_types/record";

const ARTICLE_API = "/api/article";

export async function getArticle(id: string): Promise<Article> {
    const url = buildUrl(ARTICLE_API, { id });

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.article);
}
