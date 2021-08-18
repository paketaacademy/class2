import { Router } from "express"
import UserRegister from "../controllers/Users/register-post.js"
import UserLogin from "../controllers/Users/login-post.js"
import verifyToken from "../middlewares/verify-token.js"
import { BoardControllerPost } from "../controllers/Boards/post.js"
import { BoardControllerUpdate } from "../controllers/Boards/patch.js"
import { BoardControllerDelete } from "../controllers/Boards/delete.js"

const routes = Router()
routes.post("/create-board", verifyToken, BoardControllerPost.CreateBoard)
routes.patch("/update-board", verifyToken, BoardControllerUpdate.UpdateBoard)
routes.delete("/delete-board", verifyToken, BoardControllerDelete.DeleteBoard)

routes.post('/register', UserRegister.creatUser)
routes.post('/login', UserLogin.loginUser)

export default routes