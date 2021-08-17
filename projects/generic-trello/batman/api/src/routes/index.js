import { Router } from "express"
import UserRegister from "../controllers/Users/post.js"

const routes = Router()
routes.post('/register', UserRegister.creatUser)

export default routes