-- drop tables
\ir dropAll.sql

-- initialize triggers
\ir triggers/triggers.sql

-- recreate tables
\ir tables/accounts.sql
\ir tables/contents.sql
\ir tables/sessions.sql
\ir tables/users.sql
\ir tables/verification_token.sql

-- load test data
\ir testData/fakeContents.sql
