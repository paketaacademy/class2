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
import { BoardSchema, BoardUpdateSchema } from "../validation/board-validation.js"
import { BoardControllerPost } from "../controllers/Boards/post.js"
import { BoardControllerUpdate } from "../controllers/Boards/patch.js"
import { BoardControllerDelete } from "../controllers/Boards/delete.js"
import deleteListColunm from "../controllers/lists/delete.js"
import ChangeLists from "../controllers/lists/patch.js"

const routes = Router()
routes.patch('/list/:id', verifyToken, ChangeLists.UpdateList)
routes.post('/list/:id', verifyToken, listsColumn.createList)
routes.delete('/list/:id', verifyToken, deleteListColunm.DeleteList)
routes.post('/register', validateUser(UserSchema), UserRegister.creatUser)
routes.post('/login', validateLogin(LoginSchema), UserLogin.loginUser)

routes.post("/board", verifyToken, validateBoard(BoardSchema), BoardControllerPost.CreateBoard)
routes.patch("/board/:id", verifyToken, validateBoard(BoardUpdateSchema), BoardControllerUpdate.UpdateBoard)
routes.delete("/board/:id", verifyToken, BoardControllerDelete.DeleteBoard)


export default routes