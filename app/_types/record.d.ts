export interface BaseRecord {
    createdBy: string,
    createdAt: string,
    updatedBy: string,
    updatedAt: string,
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
    draftOf: string,
    copiedFrom: string,

    name: string,
    slug: string,
    imageLink: string,
    description: string,
}

export interface Article extends ContentRecord {
    type: "article",
    content: any,
}

export interface Recipe extends ContentRecord {
    type: "recipe",
    content: any,
}

export type UserContent = Article | Recipe;
