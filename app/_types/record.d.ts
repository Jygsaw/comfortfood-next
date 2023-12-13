export interface BaseRecord {
    id: string,
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
    // TODO: refine properties
    rating?: number,
}

export interface Article extends ContentRecord {
    type: "article",
    // TODO: refine properties
    content: any,
}

export interface ArticleDraft extends Article {
    draftOf: string,
}

export interface Recipe extends ContentRecord {
    type: "recipe",
    // TODO: refine properties
    ingredients: any,
    instructions: any,
    time?: number,
    difficulty?: any,
}

export interface RecipeDraft extends Recipe {
    draftOf: string,
}

export type UserContent = Article | Recipe;
