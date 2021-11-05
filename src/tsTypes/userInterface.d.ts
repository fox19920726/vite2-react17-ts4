export interface IUserInfo {
	roleId: number
	roleName: string
	token: string
	userId: number
	userName: string
}

export interface IData {
	code: number
  data: IUserInfo
  msg: string
}

export interface ILogin {
	userName: string
	password: string
}
// export type T1<T extends string> = T extends string ? { [K in T] : string } : never