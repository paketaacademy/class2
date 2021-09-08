import { app } from "./infra/dataBase"
import dotenv from "dotenv"
dotenv.config()

const { PORT } = process.env

app.listen(PORT, () => {
  console.log("Server is running!")
})