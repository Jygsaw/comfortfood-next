CREATE TABLE contents (
    content_id UUID DEFAULT gen_random_uuid() NOT NULL,

    draft_of UUID,
    copied_from UUID,

    name TEXT,
    slug TEXT,
    image_link TEXT,
    description TEXT,

    type TEXT, -- [ article | recipe ]
    content TEXT,

    created_by UUID,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_by UUID,
    updated_at TIMESTAMPTZ,

    PRIMARY KEY (content_id)
);

CREATE TRIGGER update_contents_updated
BEFORE UPDATE ON contents
FOR EACH ROW EXECUTE PROCEDURE update_updated_column();
