import { Schema, model, Model } from "mongoose"

export interface IUser {
  _id?: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const User: Schema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    min: 3
  },
  lastName: {
    type: String,
    required: true,
    min: 3
  },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
  },
  password: {
    type: String,
    required: true
    //match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  }
})

interface userModel extends Omit<IUser, "_id">, Document { }

export const UserModel: Model<userModel> = model('Users', User, 'Users')
