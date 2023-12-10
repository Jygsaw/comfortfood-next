import type { UserContent } from "app/_types/record";

export function titleAppend(title: string) {
    return title + " | ComfortFood";
}

export function buildPath(type: UserContent["type"], id: UserContent["id"], slug: UserContent["slug"]) {
    switch (type) {
        case "recipe":
            return `/recipe/${id}/${slug}`;
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
