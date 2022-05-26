export type LoginDto = {
    email: string,
    password: string,
}

export type AuthResponse = {
    user: AuthUser,
    token: string,
}

export type AuthUser = {
    id: number,
    age: number,
    name: string,
    email: string,
    password: string,
}