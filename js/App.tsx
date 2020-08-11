import React from 'react'
import BottomNav from './views/tool/toolPage'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const AppStack = createStackNavigator(
  {
    BottomNav: {
      screen: BottomNav,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

export default createAppContainer(AppStack)
