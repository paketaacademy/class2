import jwt from "jsonwebtoken"

function verifyToken(req, res, next) {
  try {
    const token = req.header("auth-token")
    if (!token) {
      return res.status(401).send("Access Denied")
    }
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).send({
      error: `Ocorreu um erro - ${error}`,
    })
  }
}

export default verifyToken

