import app from "./configs/app.js";

app.get('/', function (req, res) {
  res.send('Hello World!')
})

export default app
