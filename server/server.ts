import express from 'express'
import emailRoutes from './src/routes/email.router'
import userRoutes from './src/routes/user.router'
import rootRoutes from './src/routes/util.router'

import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use(emailRoutes)
app.use(userRoutes)
app.use(rootRoutes)

app.listen(
  PORT,
  () => { console.log(`Listening on http://localhost:${PORT}`) }
)

export default app
  