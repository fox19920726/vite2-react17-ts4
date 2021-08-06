import React from 'react'
import { IRoute } from '@/types/menuInterface'

const paths: IRoute[] = []
const handleAsyncRoutes = ():void => {}

const tags: IRoute[] = []
const handleAddTag = (i: IRoute): void => {}
const handleRemoveTag = (i: IRoute): void => {}

const RouteContext = React.createContext({ paths, handleAsyncRoutes, tags, handleAddTag, handleRemoveTag })

export default RouteContext