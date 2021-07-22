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
  
export interface IUserState {
	type: string
	payload: IUserInfo
}

export interface ILogin {
	name?: string
	pwd?: string
	isLoading?: boolean
	error?: string
	isLoggedIn?: boolean
}

export interface ILoginState {
	type: string
	payload?: ILogin
}
// export type T1<T extends string> = T extends string ? { [K in T] : string } : never