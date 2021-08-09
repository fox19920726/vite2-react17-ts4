import React from 'react'
import { IRoute, ITagView } from '@/types/menuInterface'

const paths: IRoute[] = []
const handleAsyncRoutes = ():void => {}
const tagViewContext = {} as ITagView


const RouteContext = React.createContext({ paths, handleAsyncRoutes, ...tagViewContext })

export default RouteContext