"use server";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export async function buildFetchOptions(method: string, body?: string) {
    return {
        method,
        headers: {
            Cookie: cookies().toString(),
            ...(body ? { "Content-Type": "application/json" } : {})
        },
        ...(body ? { body } : {}),
    };
}

export async function handleNetworkResponse(response: Response) {
    if (!response.ok) {
        switch (response.status) {
            case 404:
                notFound();
            default:
                throw new Error(response.statusText);
        }
    }

    switch (response.status) {
        case 204:
            return;
        default:
            return response.json();
    }
}
