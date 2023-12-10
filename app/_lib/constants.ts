import type { Article, Recipe } from "app/_types/record";

const BASERECORD_DEFAULTS = {
    id: "NEW",
    createdBy: "",
    createdAt: "",
    updatedBy: "",
    updatedAt: "",
} as const;

const USERCONTENT_DEFAULTS = {
    name: "",
    slug: "",
    imageLink: "",
    description: "",
    bookmarked: false,
} as const;

export const NEW_ARTICLE: Article = {
    ...BASERECORD_DEFAULTS,
    ...USERCONTENT_DEFAULTS,
    type: "article",
    content: "",
} as const;

export const NEW_RECIPE: Recipe = {
    ...BASERECORD_DEFAULTS,
    ...USERCONTENT_DEFAULTS,
    type: "recipe",
    ingredients: "",
    instructions: "",
} as const;
