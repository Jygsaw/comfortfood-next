import { v4 as uuidv4 } from "uuid";
import { ARTICLE_DEFAULTS, RECIPE_DEFAULTS } from "app/_lib/constants";
import { MOCK_ARTICLE } from "app/_lib/mockArticle";

import type { Article, Recipe } from "app/_types/record";

export function generateRecipes(num: number) {
    return new Array(num).fill(null).map(() => generateRecipe());
}

export function generateRecipe(overrides?: Partial<Recipe>): Recipe {
    const id = uuidv4();
    return {
        ...RECIPE_DEFAULTS,
        contentId: id,
        slug: `lorem-ipsum-${id}`,
        name: Math.random() < 0.3 ? `Lorem Ipsum ${id}` : `Lorem Ipsum ${id} Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
        imageLink: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_59565821-77e2-437c-9113-cdf304316dd4.jpg",
        description: Math.random() < 0.5 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ...(Math.random() < 0.5 ? { rating: 3 } : {}),
        ...(Math.random() < 0.5 ? { time: 90 } : {}),
        ...overrides,
    };
}

export function generateArticles(num: number) {
    return new Array(num).fill(null).map(() => generateArticle());
}

export function generateArticle(overrides?: Partial<Article>): Article {
    const id = uuidv4();
    return {
        ...ARTICLE_DEFAULTS,
        contentId: id,
        slug: `slug-${id}`,
        imageLink: "https://www.simplyrecipes.com/thmb/aNnI7QfPFNrPdzU0Mbb7EcRvN4I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Expiration-Dates-LEAD-a9c08d6e07f14ea1a80e06e1dd86cdd7.jpg",
        ...(Math.random() < 0.5 ? { rating: 3 } : {}),
        ...MOCK_ARTICLE,
        ...overrides,
    };
}
