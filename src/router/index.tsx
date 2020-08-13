import { createStackNavigator } from 'react-navigation-stack'

import HomePage from '../views/home'
import LoginPage from '../views/login'

const Router = createStackNavigator({
  Home: HomePage,
  Login: LoginPage
})

export default Router