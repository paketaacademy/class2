import jwt from 'jsonwebtoken'

function verifyToken (req, res, next) {
  try{
    const token = req.headers['authorization']
    if (!token) {
      return res
      .status(401)
      .send('Acesse denied.')
    }
    const verified = jwt.verify(token, process.env.SECRET)
    req.user = verified
    next()
  } catch (error) {
    return res
    .status(400)
    .send({
      message: `An error has occurred ${error}.`
    })
  }
}

export default verifyToken