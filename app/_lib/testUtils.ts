import { NEW_RECIPE } from "app/_lib/constants";

import type { Recipe } from "app/_types/record";

export function generateRecipes(num: number) {
    return new Array(num).fill(null).map(() => generateRecipe());
}

export function generateRecipe(overrides?: Partial<Recipe>) {
    const id = Math.floor(Math.random() * 1000);
    return {
        ...NEW_RECIPE,
        id: id.toString(),
        slug: `lorem-ipsum-${id}`,
        name: id % 3 ? `Lorem Ipsum ${id}` : `Lorem Ipsum ${id} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
        imageLink: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_59565821-77e2-437c-9113-cdf304316dd4.jpg",
        description: id % 2 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        bookmarked: Math.random() < 0.5,
        ...overrides,
    } as const;
}
