import { Schema } from "mongoose";
import { EUserRole, IUser } from "./IUser";

export const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  role: { type:String, enum: EUserRole, default: EUserRole.STANDART},
  phone: { type: String, required: true },
});
