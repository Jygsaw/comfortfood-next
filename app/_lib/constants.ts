import type { Article, Recipe } from "app/_types/record";

export const PATH_TYPES = {
    cookbook: "cookbook",
    article: "article",
    articleDraft: "articleDraft",
    articlePreview: "articlePreview",
    recipe: "recipe",
    recipeDraft: "recipeDraft",
    recipePreview: "recipePreview",
} as const;

const BASE_RECORD_DEFAULTS = {
    createdBy: "",
    createdAt: "",
    updatedBy: "",
    updatedAt: "",
} as const;

const CONTENT_RECORD_DEFAULTS = {
    contentId: "FAKE_CONTENT_ID",
    draftOf: "",
    copiedFrom: "",

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
