import type { Recipe } from "app/_types/recipe";

export function generateRecipes(num: number) {
    return new Array(num).fill(null).map(() => generateRecipe());
}

export function generateRecipe(overrides?: Partial<Recipe>) {
    const id = Math.floor(Math.random() * 1000);
    return {
        type: "recipe",
        id: id.toString(),
        slug: `lorem-ipsum-${id}`,
        name: `Lorem Ipsum ${id}`,
        image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_59565821-77e2-437c-9113-cdf304316dd4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: Math.floor(Math.random() * 10),
        bookmarked: Math.random() < 0.5,
        ...overrides,
    } as const;
}
