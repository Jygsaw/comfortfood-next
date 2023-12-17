export interface BaseRecord {
    contentId: string,
    createdBy: string,
    createdAt: string,
    updatedBy: string,
    updatedAt: string,
}

export interface ContentRecord extends BaseRecord {
    name: string,
    slug: string,
    imageLink: string,
    description: string,

    content: any,
}

export interface Article extends ContentRecord {
    type: "article",
}

export interface ArticleDraft extends Article {
    draftOf: string,
}

export interface Recipe extends ContentRecord {
    type: "recipe",
}

export interface RecipeDraft extends Recipe {
    draftOf: string,
}

export type UserContent = Article | Recipe;
