import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'pg1234',
    database: 'salespanel',
    port: 3000
})

