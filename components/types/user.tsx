export interface User {
    id: number
    name: string
    UserType: UserType
    createdAt: Date
}

export enum UserType{
    Patient = "Patient",
    Provider = "Provider"
}