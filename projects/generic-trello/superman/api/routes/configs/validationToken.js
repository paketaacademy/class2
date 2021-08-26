import jwt from 'jsonwebtoken'

export default function validationToken(req, res, next) {
  try {
    const token = req.header("auth-superman")
    if (!token) {
      return res.status(401).send("Acesso inválido")
    }
    const verified = jwt.verify(token, process.env.SECRET)
    req.user = verified
    next()
  } catch (err) {
      res.status(400).send("Token Inválido")
  }
}