import { UrlSearchParams } from "app/_types/search";

import type { DataType } from "app/_types/card";

export function titleAppend(title: string) {
    return title + " | ComfortFood";
}

export function buildPath(type: DataType, id: string | number, slug: string) {
    switch (type) {
        case "recipe":
            return `/recipe/${id}/${slug}`;
        default:
            throw new Error(`Unknown path type: ${type}`);
    }
}

export function buildUrl(path: string, searchParams?: UrlSearchParams) {
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL;
    const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    const query = new URLSearchParams(searchParams).toString();

    return `${protocol}${hostname}${path}${query && `?${query}`}`;
}
