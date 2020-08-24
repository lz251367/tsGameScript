import React, { SFC } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import routeHelper from '../../router/routerHelper'
import commonColors from '../../utils/commonColors'
import CommonSwiper from '../../components/CommonSwiper'
import FunctionNavigate from '../../views/home/functionNavigate'

import Advertisement from './Advertisement'

type Props = {
  navigation: NavigationStackProp
}

const HomePage: SFC<Props> = ({ navigation }) => {
  return (
    <ScrollView>
      <CommonSwiper></CommonSwiper>
      <FunctionNavigate></FunctionNavigate>
      <Advertisement></Advertisement>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: commonColors.backgroudGray
  }
})
export default HomePage
