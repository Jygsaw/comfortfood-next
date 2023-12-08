export type Recipe = {
    type: "recipe",
    id: string,
    slug: string,
    name: string,
    imageLink: string,
    description: string,
    likes: integer,
    bookmarked: boolean,
};
