export type DataType = "recipe";

export type CardData = {
    type: DataType,
    id: string,
    slug: string,
    name: string,
    image: string,
    description: string,
    likes: integer,
    bookmarked: boolean,
};
