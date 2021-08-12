import jwt from 'jsonwebtoken'

export default function tokenValidation(req, res, next) {
  try {
    console.log(req)
    const token = req.header("auth-token")
    if (!token) {
      return res.status(401).send("Acesso invalido")
    }
    const verified = jwt.verify(token, process.env.SECRET)
    req.user = verified
    next()
  } catch (err) {
      res.status(400).send("Token Invalido")
  }
}