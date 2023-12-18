import { notFound } from "next/navigation";

export function handleNetworkResponse(response: Response) {
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
