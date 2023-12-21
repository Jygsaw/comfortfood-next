CREATE TABLE accounts (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    account_id UUID DEFAULT gen_random_uuid() NOT NULL,

    "userId" BIGINT NOT NULL,
    type VARCHAR(255) NOT NULL,
    provider VARCHAR(255) NOT NULL,
    "providerAccountId" VARCHAR(255) NOT NULL,
    refresh_token TEXT,
    access_token TEXT,
    expires_at BIGINT,
    id_token TEXT,
    scope TEXT,
    session_state TEXT,
    token_type TEXT,

    PRIMARY KEY (account_id)
);
