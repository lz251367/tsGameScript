import { createStackNavigator } from 'react-navigation-stack'

import HomePage from '../views/home'
import LoginPage from '../views/login'
import BookingDetailsPage from '../views/bookingDetails'
import commonColors from '../utils/commonColors'
import ReservationListPage from '../views/reservationList'

const Router = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: '首页'
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: '登录'
      }
    },
    BookingDetails: {
      screen: BookingDetailsPage,
      navigationOptions: {
        title: '预约详情'
      }
    },
    ReservationList: {
      screen: ReservationListPage,
      navigationOptions: {
        title: '体检预约'
      }
    },
  }, 
  {
    initialRouteName: 'ReservationList',
    defaultNavigationOptions: {
      headerTintColor: commonColors.primary,
    },
  },
)

export default Router
