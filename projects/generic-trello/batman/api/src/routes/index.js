import { Router } from "express"
import verifyToken from "../middlewares/verify-token.js"
import UserRegister from "../controllers/Users/post.js"
import { BoardControllerPost } from "../controllers/Boards/post.js"
import { BoardControllerUpdate } from "../controllers/Boards/patch.js"
import { BoardControllerDelete } from "../controllers/Boards/delete.js"

const routes = Router()
routes.post('/register', verifyToken, UserRegister.creatUser)

routes.post("/create-board", verifyToken, BoardControllerPost.CreateBoard)
routes.patch("/update-board", verifyToken, BoardControllerUpdate.UpdateBoard)
routes.delete("/delete-board", verifyToken, BoardControllerDelete.DeleteBoard)

export default routes