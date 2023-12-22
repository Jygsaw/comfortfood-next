"use server";

import { buildFetchOptions, handleNetworkResponse } from "app/_lib/apiUtils";
import { buildUrl } from "app/_lib/siteUtils";

import type { Article, ArticleDraft } from "app/_types/record";

const ARTICLES_API = "/api/articles";

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
        .then(handleNetworkResponse);
}

export async function createArticleDraft(id: string = ""): Promise<ArticleDraft> {
    const url = buildUrl(`${ARTICLES_API}/${id}`);
    const options = await buildFetchOptions("POST");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function getArticleDraft(id: string): Promise<ArticleDraft> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = await buildFetchOptions("GET");

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function updateArticleDraft(id: string, data: Partial<ArticleDraft>): Promise<ArticleDraft> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = await buildFetchOptions("PATCH", JSON.stringify(data));

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.article);
}

export async function deleteArticleDraft(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft`);
    const options = await buildFetchOptions("DELETE");

    return fetch(url, options)
        .then(handleNetworkResponse);
}

export async function publishArticleDraft(id: string): Promise<void> {
    const url = buildUrl(`${ARTICLES_API}/${id}/draft/preview`);
    const options = await buildFetchOptions("PATCH");

    return fetch(url, options)
        .then(handleNetworkResponse);
}
