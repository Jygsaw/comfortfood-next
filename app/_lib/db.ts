/*
    = TEMPORARY LOCATION FOR DB NOTES UNTIL DOCS WRITTEN OR PROCESS AUTOMATED =

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE contents (
        content_id UUID DEFAULT uuid_generate_v4(),

        created_by UUID,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_by UUID,
        updated_at TIMESTAMPTZ,
        draft_of UUID,

        name TEXT,
        slug TEXT,
        image_link TEXT,
        description TEXT,

        type TEXT, -- [ article | recipe ]
        content TEXT,

        PRIMARY KEY (content_id)
    );

    CREATE OR REPLACE FUNCTION update_updated_column()
    RETURNS TRIGGER AS $$
    BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
    END;
    $$ LANGUAGE 'plpgsql';

    CREATE TRIGGER update_contents_updated
    BEFORE UPDATE ON contents
    FOR EACH ROW EXECUTE PROCEDURE update_updated_column();
*/

import postgres from "postgres";

const sql = postgres({
    host: process.env.POSTGRES_HOSTNAME,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    transform: postgres.camel,
});

export default sql;
