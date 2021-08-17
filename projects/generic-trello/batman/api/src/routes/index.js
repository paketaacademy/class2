import { Router } from "express"
import UserRegister from "../controllers/Users/post.js"

const routes = Router()
routes.post('/register', verifyToken, UserRegister.creatUser)

export default routes