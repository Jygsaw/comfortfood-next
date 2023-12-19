export const RESPONSES = {
    NO_CONTENT: new Response(null, { status: 204 }),
    INVALID_DATA:
        Response.json({ error: { code: 422, message: "Invalid data" } }, { status: 422 }),
    NOT_FOUND:
        Response.json({ error: { code: 404, message: "Not found" } }, { status: 404 }),
    SERVER_ERROR:
        Response.json({ error: { code: 500, message: "Server error" } }, { status: 500 }),
} as const;
