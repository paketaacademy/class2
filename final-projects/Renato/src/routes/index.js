import { Router } from "express"
import userRegister from "../controllers/user/register.js"
import { validateUsers } from "../middlewares/users-validate.js"
import { userValidationSchema } from "../validation/users-validation.js"

const routes = Router()

routes.post('/register', validateUsers(userValidationSchema), userRegister.creatUser)

export default routes