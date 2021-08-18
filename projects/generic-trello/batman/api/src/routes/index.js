import { Router } from "express"
import listsColumn from "../controllers/lists/post.js"
import UserRegister from "../controllers/Users/register-post.js"
import UserLogin from "../controllers/Users/login-post.js"
import verifyToken from "../middlewares/verify-token.js"
import { validateUser } from "../middlewares/user-validate.js"
import { UserSchema } from "../validation/user-validation.js"
import { validateLogin } from "../middlewares/login-validate.js"
import { LoginSchema } from "../validation/login-validation.js"
import { validateBoard } from "../middlewares/board-validate.js"
import { BoardSchema } from "../validation/board-validation.js"
import { BoardControllerPost } from "../controllers/Boards/post.js"
import { BoardControllerUpdate } from "../controllers/Boards/patch.js"
import { BoardControllerDelete } from "../controllers/Boards/delete.js"

const routes = Router()
routes.post('/creat-lists', verifyToken, listsColumn)
routes.post('/register', validateUser(UserSchema), UserRegister.creatUser)
routes.post('/login', validateLogin(LoginSchema), UserLogin.loginUser)
routes.post("/create-board", validateBoard(BoardSchema), verifyToken, BoardController.createBoard)
routes.patch("/update-board", verifyToken, BoardControllerUpdate.UpdateBoard)
routes.delete("/delete-board", verifyToken, BoardControllerDelete.DeleteBoard)

export default routes