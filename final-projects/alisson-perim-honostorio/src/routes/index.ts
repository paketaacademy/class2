import { Router } from "express"
import cors from "cors"
import { userValidation } from "../middlewares/userValidation"
import { userYupValidations } from "../validations/userValidations"
import { createUser } from "../controllers/UserController/register"
import { loginValidation } from "../middlewares/loginValidation"
import { loginYupValidation } from "../validations/loginValidations"
import { userLogin } from "../controllers/UserController/login"

const router = Router()

const corsOption = {
  exposedHeaders: "Bearer"
}

router.use(cors(corsOption))

router.post('/users', userValidation(userYupValidations), createUser.create)
router.post('/login', loginValidation(loginYupValidation), userLogin.login)

export { router }