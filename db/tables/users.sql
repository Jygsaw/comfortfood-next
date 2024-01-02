CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    user_id UUID DEFAULT gen_random_uuid() NOT NULL,

    name VARCHAR(255),
    email VARCHAR(255),
    "emailVerified" TIMESTAMPTZ,
    image TEXT,

    created_by UUID,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_by UUID,
    updated_at TIMESTAMPTZ,

    PRIMARY KEY (user_id)
);

CREATE TRIGGER update_users_updated
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE PROCEDURE update_updated_column();
