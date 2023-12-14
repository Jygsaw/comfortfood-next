import type { Article, Recipe } from "app/_types/record";

export const PATH_TYPES = {
    article: "article",
    articleDraft: "articleDraft",
    articlePreview: "articlePreview",
    recipe: "recipe",
    recipeDraft: "recipeDraft",
    recipePreview: "recipePreview",
} as const;

const BASE_RECORD_DEFAULTS = {
    id: "NEW",
    createdBy: "",
    createdAt: "",
    updatedBy: "",
    updatedAt: "",
} as const;

const CONTENT_RECORD_DEFAULTS = {
    name: "",
    slug: "",
    imageLink: "",
    description: "",
} as const;

export const ARTICLE_DEFAULTS: Article = {
    ...BASE_RECORD_DEFAULTS,
    ...CONTENT_RECORD_DEFAULTS,
    type: "article",
    content: "",
} as const;

export const RECIPE_DEFAULTS: Recipe = {
    ...BASE_RECORD_DEFAULTS,
    ...CONTENT_RECORD_DEFAULTS,
    type: "recipe",
    ingredients: "",
    instructions: "",
} as const;
