import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  port: 5432
});

client.connect();

client.query('select * from excelsior.users', (err, results) => {
  return console.log(results);
});