import { buildUrl } from "./siteUtils";

import type { Article } from "app/_types/record";

const ARTICLES_API = "/api/articles";

export async function getArticle(id: string): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json =>json.data.article);
}

export async function createArticle(data: Partial<Article>): Promise<Article> {
    const url = buildUrl(ARTICLES_API);
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.article);
}

export async function updateArticle(id: string, data: Partial<Article>): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.article);
}

export async function deleteArticle(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = {
        method: "DELETE",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
        });
}
