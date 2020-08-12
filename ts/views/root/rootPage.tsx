import React from 'react'
import HomePage from '../home/homePage'
import MyPage from '../my/myPage'
import ToolPage from '../tool/toolPage'

import {createBottomTabNavigator} from 'react-navigation-tabs'

const BottomNav = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: '首页',
      tabBarLabel: '首页',
    },
  },
  Toll: {
    screen: ToolPage,
    navigationOptions: {
      title: '工具',
      tabBarLabel: '工具',
    },
  },
  My: {
    screen: MyPage,
    navigationOptions: {
      title: '我的',
      tabBarLabel: '我的',
    },
  },
})

export default BottomNav
