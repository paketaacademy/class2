import { Router } from "express"
import UserRegister from "../controllers/Users/register-post.js"
import UserLogin from "../controllers/Users/login-post.js"
import verifyToken from "../middlewares/verify-token.js"

const routes = Router()
routes.post('/register', UserRegister.creatUser)
routes.post('/login', UserLogin.loginUser)

export default routes