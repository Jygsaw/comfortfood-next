import type { DataType } from "app/_types/card";

export function titleAppend(title: string) {
    return title + " | ComfortFood";
}

export function buildPath(type: DataType, id: string | number, slug: string) {
    switch (type) {
    case "recipe":
        return `recipe/${id}/${slug}`;
    default:
        throw new Error(`Unknown path type: ${type}`);
    }
}
