import React, { useRef, useEffect } from 'react'

import { createAppContainer } from 'react-navigation'
import Router from './router'
import routerHelper from './router/routerHelper'
import routeHelper from './router/routerHelper'
const Container = createAppContainer(Router)

const App = () => {
  const _ref = useRef(null)
  useEffect(() => {
    routeHelper.setRef(_ref)
  }, [])
  return <Container ref={_ref}></Container>
}

export default App
