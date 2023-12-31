"use server";

import { revalidatePath } from "next/cache";
import { buildFetchOptions, handleNetworkResponse } from "app/_lib/apiUtils";
import { buildPath, buildUrl } from "app/_lib/siteUtils";
import { PATHS } from "app/_lib/constants";

import type { Article } from "app/_types/record";

const ARTICLES_API = "/api/articles";

export async function createArticleDraft(): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}`);
    const options = await buildFetchOptions("POST");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function getArticle(id: string): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = await buildFetchOptions("GET");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function deleteArticle(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = await buildFetchOptions("DELETE");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(() => revalidatePath(buildPath(PATHS.article, id), "layout"));
}

export async function editArticle(id: string): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = await buildFetchOptions("PUT");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function copyArticle(id: string): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = await buildFetchOptions("POST");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function getArticleDraft(id: string): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = await buildFetchOptions("GET");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function updateArticleDraft(id: string, data: Partial<Article>): Promise<Article> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = await buildFetchOptions("PATCH", JSON.stringify(data));

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => {
            revalidatePath(buildPath(PATHS.articleDraft, id), "layout");
            return json.data.article;
        });
}

export async function deleteArticleDraft(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = await buildFetchOptions("DELETE");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(() => revalidatePath(buildPath(PATHS.articleDraft, id), "layout"));
}

export async function publishArticleDraft(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft/preview`);
    const options = await buildFetchOptions("PATCH");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(() => revalidatePath(buildPath(PATHS.article, id), "layout"));
}
