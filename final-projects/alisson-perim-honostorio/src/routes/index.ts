import { Router } from "express"
import cors from "cors"
import { userValidation } from "../middlewares/userValidation"
import { userYupValidations } from "../validations/userValidations"
import { createUser } from "../controllers/UserController/post"

const router = Router()

const corsOption = {
  exposedHeaders: "Bearer"
}

router.use(cors(corsOption))

router.post('/users', userValidation(userYupValidations), createUser.create)

export { router }