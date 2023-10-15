import express, { Request, Response, NextFunction } from 'express'
import usersRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'

const app = express()
const PORT = 4000

app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error: ', err.message)
  res.status(400).json({ error: err.message })
})
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
