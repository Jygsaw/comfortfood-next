import { PATH_TYPES } from "app/_lib/constants";

// TODO: find a better official source
// note: interface based on ".next\types\app\page.ts"
export interface PageProps {
    params?: Record<string, string>,
    searchParams?: Record<string, string>,
}

export type DynamicRoute = { params: { id: string, slug: string}};

export type PathTypes = typeof PATH_TYPES[keyof typeof PATH_TYPES];
