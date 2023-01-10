export interface IUser {
  name: string
  cpf: number
  email: string
  avatar?: string
  role: EUserRole
  phone: string
}

export enum EUserRole {
  ADMIN = 'admin',
  STANDART = 'standart'
}
