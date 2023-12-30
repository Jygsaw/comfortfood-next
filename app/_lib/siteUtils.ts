import { PATHS } from "app/_lib/constants";

import type { PathTypes } from "app/_types/site";

export function titleAppend(title: string) {
    return title + " | ComfortFood";
}

export function buildPath(type: PathTypes, id?: string, slug?: string) {
    switch (type) {
        case PATHS.cookbook:
            return "/cookbook";
        case PATHS.article:
            return ["/articles", id, slug].join("/");
        case PATHS.articleDraft:
            return ["/articles", id, "draft"].join("/");
        case PATHS.articlePreview:
            return ["/articles", id, "draft", "preview"].join("/");
        case PATHS.recipe:
            return ["/recipes", id, slug].join("/");
        case PATHS.recipeDraft:
            return ["/recipes", id, "draft"].join("/");
        case PATHS.recipePreview:
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

export function debounce<F extends(...args: Parameters<F>) => ReturnType<F>>(func: F, ms: number) {
    let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;
    return (...args: Parameters<F>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(null, args), ms);
    };
}

// slugify function taken from: https://byby.dev/js-slugify-string
// TODO: decide if this is good enough or write my own or rely on library dependency
export function slugify(str: string = "") {
    return String(str)
        .normalize("NFKD") // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
        .replace(/\s+/g, "-") // replace spaces with hyphens
        .replace(/-+/g, "-"); // remove consecutive hyphens
}
