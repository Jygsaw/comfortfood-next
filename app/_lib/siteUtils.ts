// TODO: rethink how to generalize and type path construction
type PathType = "recipe" | "recipeDraft" | "recipePreview" | "article" | "articleDraft" | "articlePreview";

export function titleAppend(title: string) {
    return title + " | ComfortFood";
}

export function buildPath(type: PathType, id?: string, slug?: string) {
    switch (type) {
        case "article":
            return ["/articles", id, slug].join("/");
        case "articleDraft":
            return ["/articles", id, "draft"].join("/");
        case "articlePreview":
            return ["/articles", id, "draft", "preview"].join("/");
        case "recipe":
            return ["/recipes", id, slug].join("/");
        case "recipeDraft":
            return ["/recipes", id, "draft"].join("/");
        case "recipePreview":
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
