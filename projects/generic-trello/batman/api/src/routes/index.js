import { Router } from "express"
import { BoardController } from "../controllers/Boards/post.js"
import UserRegister from "../controllers/Users/register-post.js"
import UserLogin from "../controllers/Users/login-post.js"
import verifyToken from "../middlewares/verify-token.js"
import { validateUser } from "../middlewares/user-validate.js"
import { UserSchema } from "../validation/user-validation.js"
import { validateLogin } from "../middlewares/login-validate.js"
import { LoginSchema } from "../validation/login-validation.js"
import { validateBoard } from "../middlewares/board-validate.js"
import { BoardSchema } from "../validation/board-validation.js"


const routes = Router()
routes.post('/register', validateUser(UserSchema), UserRegister.creatUser)
routes.post('/login', validateLogin(LoginSchema), UserLogin.loginUser)
routes.post("/create-board", validateBoard(BoardSchema), verifyToken, BoardController.createBoard)

export default routes