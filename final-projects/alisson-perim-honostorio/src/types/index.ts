declare namespace Express {
  export interface Request {
    user: {
      id: string,
      iat: number,
      exp: number
    }
  }
}