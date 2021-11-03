import React from 'react'
import { IRoute } from '@/tsTypes/menuInterface.d'
import { useDispatch } from 'react-redux'
import { addTag, removeTag, setActive, setDelete, setMenuItem, removeOtherTags, removeAllTags } from '@/store/reducer/tagView/action'

function useTagView() {
  const dispatch = useDispatch()

  /*
  * 这里其实可以用函数重载的方式去优化代码（function overload）
  * 但是外部就需要记得有哪些类型，调用的时候传入action类型，且修改的时候需要修改多处文件
  * 我这里这样的设计外部就不用关心类型有哪些，且如果发生变动，改这里一个文件即可
  * 且，我认为业务代码命名应该是要表意的，具体的方法名让业务逻辑更清晰
  * 且，万一他们以后各自会有别的业务场景呢
  */

  const handleAddTag = (route: IRoute): void => {
    dispatch(addTag(route))
  }

  const handleRemoveTag = (route: IRoute): void => {
    dispatch(removeTag(route))
  }

  const handleSetActive = (route: IRoute): void => {
    dispatch(setActive(route))
  }

  const handleSetDelete = (route: IRoute): void => {
    dispatch(setDelete(route))
  }

  const handleSetMenuItem = (route: IRoute): void => {
    dispatch(setMenuItem(route))
  }

  const handleRemoveOtherTags = (route: IRoute): void => {
    dispatch(removeOtherTags(route))
  }

  const handleRemoveAllTags = (): void => {
    dispatch(removeAllTags())
  }

  return {
    handleAddTag,
    handleRemoveTag,
    handleSetActive,
    handleSetDelete,
    handleSetMenuItem,
    handleRemoveOtherTags,
    handleRemoveAllTags
   } as const
} 
export default useTagView