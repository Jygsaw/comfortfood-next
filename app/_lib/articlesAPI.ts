import { buildUrl } from "./siteUtils";

import type { Article, ArticleDraft } from "app/_types/record";

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

export async function createArticleDraft(id: string = ""): Promise<ArticleDraft> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = {
        method: "POST",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.article);
}

export async function getArticleDraft(id: string): Promise<ArticleDraft> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(json => json.data.article);
}

export async function updateArticleDraft(id: string, data: Partial<ArticleDraft>): Promise<ArticleDraft> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
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

export async function deleteArticleDraft(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = {
        method: "DELETE",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
        });
}

export async function publishArticleDraft(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft/preview`);
    const options = {
        method: "PATCH",
    };

    return fetch(url, options)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
        });
}
