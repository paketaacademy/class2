import { Router } from "express"
import { BoardController } from "../controllers/Boards/post.js"
import verifyToken from "../middlewares/verify-token.js"

const routes = Router()
routes.get('/', (req, res) => {
    res.send('funcionou')
})
routes.post("/create-board", verifyToken, BoardController.createBoard)

export default routes