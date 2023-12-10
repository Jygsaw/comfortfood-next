export interface BaseRecord {
    id: string,
    createdBy: string,
    createdAt: string,
    updatedBy: string,
    updatedAt: string,
}

export interface UserContent extends BaseRecord {
    type: (Article | Recipe)["type"],
    name: string,
    slug: string,
    imageLink: string,
    description: string,
    bookmarked: boolean,
}

export interface Article extends UserContent {
    type: "article",
    // TODO: refine properties
    content: any,
}

export interface Recipe extends UserContent {
    type: "recipe",
    // TODO: refine properties
    ingredients: any,
    instructions: any,
}
