import { FC } from 'react'

// 目前就一个title，可能后期会扩展
export interface IMeta {
	title: string
}

/*
* 当该menu为 目录的时候不需要component
* 当该路由下没有子路由的时候不需要children
*/
export interface IRoute {
	path: string
	component?: string | undefined
	show: boolean
	children?: IRoute[]
	meta: IMeta
}

// 导入的路由
export interface IComponent {
	[key: string]: FC
}

// 异步路由
export interface IAsyncRoute {
	rows: IRoute[]
	msg: string
	code: number
}

export interface ITagViewFn {
	handleAddTag: (i: IRoute) => void
	handleRemoveTag: (i: IRoute) => void
	handleSetActive: (i: IRoute) => void
	handleSetDelete: (i: IRoute) => void
  handleSetMenuItem: (i: IRoute) => void
  handleRemoveOtherTags: (i: IRoute) => void
  handleRemoveAllTags: () => void
}

// tagView action
export interface ITagViewAction {
  activeTag?: IRoute
  deleteItem?: IRoute
  menuItem?: IRoute
  tagList: IRoute[]
}

// tagView context
export interface ITagView {
	tags: ITagViewAction
	handleTag: ITagViewFn
}

// 路由hook
export interface ITagViewState {
	type: string
	payload: ITagViewAction
}

// 右键tagview
export interface ITagMenu {
  left: number
  top: number
  item: IRoute
}
