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
    contentId: "FAKE_ID",
    createdBy: "",
    createdAt: "",
    updatedBy: "",
    updatedAt: "",
    copiedFrom: "",
} as const;

const CONTENT_RECORD_DEFAULTS = {
    name: "",
    slug: "",
    imageLink: "",
    description: "",

    content: "",
} as const;

export const ARTICLE_DEFAULTS: Article = {
    ...BASE_RECORD_DEFAULTS,
    ...CONTENT_RECORD_DEFAULTS,
    type: "article",
} as const;

export const RECIPE_DEFAULTS: Recipe = {
    ...BASE_RECORD_DEFAULTS,
    ...CONTENT_RECORD_DEFAULTS,
    type: "recipe",
} as const;
