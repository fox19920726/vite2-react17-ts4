import React, { FC, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'

const Reloador: FC = () => {
	const history = useHistory()
  const { state: { path } } = useLocation<{path?: string}>()

  useEffect(() => {
    history.replace(path || '/')
  }, [])

  return (
    <h1>reload...</h1>
  )
}

export default Reloador
