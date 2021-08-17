import { Router } from "express"
import { BoardController } from "../controllers/Boards/post.js"
import verifyToken from "../middlewares/verify-token.js"
import UserRegister from "../controllers/Users/post.js"

const routes = Router()
routes.post('/register', verifyToken, UserRegister.creatUser)
routes.post("/create-board", verifyToken, BoardController.createBoard)

export default routes