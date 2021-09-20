import { Request, Response } from "express";

export const Terms = {
  termsOfService(req: Request, res: Response){
    return res
    .status(200)
    .send({
      Terms: "We are not responsible for any type of problem or inconvenience that this API may be generated",
      Contact: "alissonhonostoriodev@gmail.com"
    })
  }
}