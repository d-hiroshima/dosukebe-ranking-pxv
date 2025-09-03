import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { routes } from './presentation/routes'
import { errorHandler } from './presentation/middleware/errorHandler'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})