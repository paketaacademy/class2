import { Router } from "express"
import { BoardController } from "../controllers/Boards/post.js"
import listsColumn from "../controllers/lists/post.js"
import UserRegister from "../controllers/Users/register-post.js"
import UserLogin from "../controllers/Users/login-post.js"
import verifyToken from "../middlewares/verify-token.js"

const routes = Router()
routes.post('/register', UserRegister.creatUser)
routes.post('/login', UserLogin.loginUser)
routes.post("/create-board", verifyToken, BoardController.createBoard)
routes.post('/creat-lists', verifyToken, listsColumn)

export default routes