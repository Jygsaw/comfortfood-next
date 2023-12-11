import type { UserContent } from "app/_types/record";

export function titleAppend(title: string) {
    return title + " | ComfortFood";
}

export function getBasePath(type: UserContent["type"]) {
    switch (type) {
        case "article":
            return "/articles";
        case "recipe":
            return "/recipes";
        default:
            throw new Error(`Unknown path type: ${type}`);
    }
}

export function buildPath(type: UserContent["type"], id?: string, slug?: string) {
    return [getBasePath(type), id, slug].join("/");
}

export function buildUrl(path: string, params?: Record<string, string>) {
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL;
    const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    const query = new URLSearchParams(params).toString();

    return `${protocol}${hostname}${path}${query && `?${query}`}`;
}
