import { createUserController } from '../user/createUserController'
import app from './app'

app.post('/user', createUserController)

export default app
