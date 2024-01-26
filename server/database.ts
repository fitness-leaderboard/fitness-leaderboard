import { createPool } from 'mysql'  

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  connectionLimit: 10
})

pool.query('select * from excelsior.users', (err, results) => { 
  return console.log(results)
})