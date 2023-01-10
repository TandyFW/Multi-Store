import * as dotenv from 'dotenv'
import express from 'express'
import routers from './controllers/routes'

dotenv.config()

const app = express()
const port = process.env.PORT || 8001

app.use(routers.userRouter)

app.listen(port, () => console.log(`Server started at port ${port}`))
