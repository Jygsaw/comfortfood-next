import { handleNetworkResponse } from "./apiUtils";
import { buildUrl } from "./siteUtils";

import type { UserContent } from "app/_types/record";

const LISTS_API = "/api/lists";

export async function getList(searchParams?: Record<string, string>): Promise<UserContent[]> {
    const url = buildUrl(LISTS_API, searchParams);
    const options = {
        method: "GET",
    };

    return fetch(url, options)
        .then(handleNetworkResponse)
        .then(json => json.data.list);
}
