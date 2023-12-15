/*
    = TEMPORARY LOCATION FOR DB NOTES UNTIL DOCS OR SCRIPTS AUTOMATE THE PROCESS =

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE contents (
        content_id UUID DEFAULT uuid_generate_v4(),

        created_by UUID,
        created_at TIMESTAMPTZ,
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
*/

import postgres from "postgres";

const sql = postgres({
    host: process.env.POSTGRES_HOSTNAME,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
});

export default sql;
