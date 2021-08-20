import { Router } from "express"
import listsColumn from "../controllers/lists/post.js"
import UserRegister from "../controllers/Users/register-post.js"
import UserLogin from "../controllers/Users/login-post.js"
import verifyToken from "../middlewares/verify-token.js"
import { validateUser } from "../middlewares/user-validate.js"
import { UserSchema } from "../validation/user-validation.js"
import { validateLogin } from "../middlewares/login-validate.js"
import { LoginSchema } from "../validation/login-validation.js"
import { validateAssign, validateBoard } from "../middlewares/board-validate.js"
import { BoardAssignSchema, BoardSchema, BoardUpdateSchema } from "../validation/board-validation.js"
import { BoardControllerPost } from "../controllers/Boards/post.js"
import { BoardControllerUpdate } from "../controllers/Boards/patch.js"
import { BoardControllerDelete } from "../controllers/Boards/delete.js"
import deleteListColunm from "../controllers/lists/delete.js"
import cardController from "../controllers/Cards/post.js"
import changeLists from "../controllers/lists/patch.js"
import getLists from "../controllers/lists/get.js"
import { BoardAssignControllerPatch } from "../controllers/Boards/assign-patch.js"

const routes = Router()
routes.get('/list/:id', verifyToken, getLists.AllLists)
routes.post('/list/:id', verifyToken, listsColumn.CreateList)
routes.patch('/list/:id',verifyToken, changeLists.UpdateList)
routes.delete('/list/:id', verifyToken, deleteListColunm.DeleteList)

routes.post('/register', validateUser(UserSchema), UserRegister.creatUser)
routes.post('/login', validateLogin(LoginSchema), UserLogin.loginUser)

routes.post("/board", verifyToken, validateBoard(BoardSchema), BoardControllerPost.CreateBoard)
routes.patch("/board/:id", verifyToken, validateBoard(BoardUpdateSchema), BoardControllerUpdate.UpdateBoard)
routes.patch("/board/:id/:email", verifyToken, validateAssign(BoardAssignSchema), BoardAssignControllerPatch.BoardAssign)
routes.delete("/board/:id", verifyToken, BoardControllerDelete.DeleteBoard)


routes.post('/card/:id', verifyToken, cardController.createCard)


export default routes