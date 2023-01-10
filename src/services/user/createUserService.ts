import { IUser } from "../../models/user/IUser"
import { createUser } from "../../models/user/user"

export const createUserService = (user: IUser) => {
  return createUser(user)
}
