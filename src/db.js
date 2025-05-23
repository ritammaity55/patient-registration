import { PGlite } from '@electric-sql/pglite';

const db = new PGlite({ persistent: true });

(async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      dob DATE NOT NULL,
      email TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
})();

export default db;