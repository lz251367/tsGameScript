import { NavigationActions } from 'react-navigation'

let _navigationrRef: any;

const setRef = (navigationrRef: any) => {
  _navigationrRef = navigationrRef
}

const navigate = (routeName: string, params?: any) => {
  _navigationrRef.current.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

const routeHelper = {
  setRef,
  navigate
}

export default routeHelper