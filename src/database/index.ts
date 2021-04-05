import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'pg1234',
    database: 'costumerspanel',
    port: 3000
})

