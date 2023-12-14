import { PATH_TYPES } from "app/_lib/constants";

import type { PathTypes } from "app/_types/site";

export function titleAppend(title: string) {
    return title + " | ComfortFood";
}

export function buildPath(type: PathTypes, id?: string, slug?: string) {
    switch (type) {
        case PATH_TYPES.article:
            return ["/articles", id, slug].join("/");
        case PATH_TYPES.articleDraft:
            return ["/articles", id, "draft"].join("/");
        case PATH_TYPES.articlePreview:
            return ["/articles", id, "draft", "preview"].join("/");
        case PATH_TYPES.recipe:
            return ["/recipes", id, slug].join("/");
        case PATH_TYPES.recipeDraft:
            return ["/recipes", id, "draft"].join("/");
        case PATH_TYPES.recipePreview:
            return ["/recipes", id, "draft", "preview"].join("/");
        default:
            throw new Error(`Unknown path type: ${type}`);
    }
}

export function buildUrl(path: string, params?: Record<string, string>) {
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL;
    const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    const query = new URLSearchParams(params).toString();

    return `${protocol}${hostname}${path}${query && `?${query}`}`;
}
