// TODO: investigate using pg as db client to reduce number of dependencies,
//       since pg is already a requried dependency of next-auth db adapter

import postgres from "postgres";
import { Pool } from "pg";

export const sql = postgres({
    host: process.env.POSTGRES_HOSTNAME,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    transform: postgres.camel,
});

export const pool = new Pool({
    host: process.env.POSTGRES_HOSTNAME,
    port: 5432,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export default sql;
