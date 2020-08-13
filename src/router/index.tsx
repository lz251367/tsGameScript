import { createStackNavigator } from 'react-navigation-stack'

import HomePage from '../views/home'
import LoginPage from '../views/login'
import BookingDetailsPage from '../views/bookingDetails'

const Router = createStackNavigator({
  Home: HomePage,
  Login: LoginPage,
  BookingDetails: BookingDetailsPage
})

export default Router