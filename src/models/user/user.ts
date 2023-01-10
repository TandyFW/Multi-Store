import mongoose, { connect, model } from "mongoose"
import { IUser } from "./IUser";
import { userSchema } from "./userSchema"

const User = model<IUser>('User', userSchema)

export const createUser = async ({ name, cpf, email, phone, avatar, role}: IUser): Promise<IUser | undefined> => {
  try {
    mongoose.set('strictQuery', false)
    const mongoUrl = process.env.MONGO_URL || ''
    await connect(mongoUrl)
    const user = new User({
      name,
      cpf,
      email,
      avatar,
      role,
      phone,
    })
    await user.save()
    return user
  } catch (error) {
    console.log(`Error: Failed to save new user ${name}`, error)
  }
}
