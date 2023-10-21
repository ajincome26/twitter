import express from 'express'
import usersRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
import { defaultErrorHandler } from './middlewares/errror.middleware'

const app = express()
const PORT = 4000

databaseService.connect()

app.use(express.json())
app.use('/users', usersRouter)
app.use(defaultErrorHandler)
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
