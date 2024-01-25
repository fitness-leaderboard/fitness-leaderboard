import express from 'express'
import emailRoutes from './src/routes/email.router'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(emailRoutes)

app.listen(
  PORT,
  () => { console.log(`Listening on http://localhost:${PORT}`) }
)

export default app