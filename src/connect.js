import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_tracker',
  password: '', // Ensure you have your password here, Sorry for not setting up process.env
  port: 5432,
});

export const query = (text, params) => pool.query(text, params);