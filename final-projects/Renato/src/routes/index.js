import { Router } from 'express'
import registerSoldiers from '../controllers/register-soldiers.js'


const routes = Router()

routes.post('/register', registerSoldiers.creatSoldier)

export default routes