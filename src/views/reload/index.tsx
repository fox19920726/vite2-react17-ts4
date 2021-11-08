import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router'

const Reloador: FC = (props) => {
	const history = useHistory()

  useEffect(() => {
    history.replace(props?.location?.state?.path || '/')
  }, [])

  return (
    <h1>reload...</h1>
  )
}

export default Reloador
