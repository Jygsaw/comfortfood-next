export interface BaseRecord {
    createdBy: string,
    createdAt: string,
    updatedBy: string,
    updatedAt: string,
    copiedFrom: string,
}

export interface UserRecord extends BaseRecord {
    userId: string,
    name: string,
    email: string,
    emailVerified: string,
    image: string,
}

export interface ContentRecord extends BaseRecord {
    contentId: string,
    name: string,
    slug: string,
    imageLink: string,
    description: string,
}

export interface Article extends ContentRecord {
    type: "article",
    content: any,
}

export interface ArticleDraft extends Article {
    draftOf: string,
}

export interface Recipe extends ContentRecord {
    type: "recipe",
    content: any,
}

export interface RecipeDraft extends Recipe {
    draftOf: string,
}

export type UserContent = Article | Recipe;
