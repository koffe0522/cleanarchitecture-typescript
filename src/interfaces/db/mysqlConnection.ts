import mysql, { Pool, Query, Connection } from 'mysql'
import * as util from 'util';
import { dbConnection } from "./dbConnection";

export class MysqlConnection extends dbConnection {
  private pool: Pool;

  constructor() {
    super();
    this.pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: Number(process.env.DB_PORT),
      timezone: process.env.TIMEZONE,
      insecureAuth: false
    })

    this.pool.getConnection((error, connection) => {
      if (error) {
        if (error.code === "PROTOCOL_CONNECTION_LOST") {
          console.error("Database connection was closed.");
        }
        if (error.code === "ER_CON_COUNT_ERROR") {
          console.error("Database has too many connections.");
        }
        if (error.code === "ECONNREFUSED") {
          console.error("Database connection was refused.");
        }
      }

      if (connection) {
        connection.release();
      }

      return
    })
    // @ts-ignore
    this.pool.query = util.promisify(this.pool.query);

    this.pool.on(
      "connection",
      (): void => {
        console.log("mysql connection create");
        const sql = `CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),age INT(3))`
        this.pool.query(sql)
      }
    );

    this.pool.on(
      "release",
      (connection): void => {
        console.log("Connection %d released", connection.threadId);
      }
    );
  }

  execute(query: string, params?: string | number | null): Query | void {
    if (params) {
      return this.pool.query(query, params);
    }

    return this.pool.query(query);
  }
}