export type Recipe = {
    type: "recipe",
    id: string,
    slug: string,
    name: string,
    image: string,
    description: string,
    likes: integer,
    bookmarked: boolean,
};
