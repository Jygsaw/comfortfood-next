// TODO: migrate code from postgres to pg, since pg is requried dependency of next-auth db adapter

import postgres from "postgres";

const sql = postgres({
    host: process.env.POSTGRES_HOSTNAME,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    transform: postgres.camel,
});

export default sql;
