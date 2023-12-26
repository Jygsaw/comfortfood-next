-- kills all connections
-- should be used very sparingly
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE datname = '[database_name]'
    AND pid != pg_backend_pid()
    AND leader_pid IS NULL;
