import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUserService";

export const createUserController = async (req: Request, res: Response) => {
  const createdUser = await createUserService(req.body)
  if (!createdUser) return res.send('Não foi possível criar o usuário').status(404)
  return res.send(createdUser).status(201)
}
