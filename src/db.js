import { createPool } from 'mysql2/promise';
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_PORT
} from './config.js'

export const pool = createPool({
    host: DB_HOST, //url de la base de datos
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

// pool.query('SELECT * FROM rooms', (err, result) => {
    //
    //console.log (result)
    //
// })
 