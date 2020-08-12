import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

class HomePage extends Component {
  static bottomNav = {
    tabBarLabel: '首页',
    babBarIcon: ({focused}) => {
      if (focused) {
        return (
          <View style={styles.tabView}>
            <Image
              style={styles.tabIcon}
              source={require('../../assets/images/homeS.svg')}></Image>
            <Text styles={(styles.select, styles.tabText)}>首页</Text>
          </View>
        )
      }
      return (
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={require('../../assets/images/home.svg')}></Image>
          <Text styles={styles.tabText}>首页</Text>
        </View>
      )
    },
  }
  render () {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>首页页面</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a8af4',
  },
  text: {
    fontSize: 20,
    color: '#ff8e28',
  },
  tabView: {
    flex: 1,
    height: 32,
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  select: {
    color: '#e91e63',
  },
  tabText: {
    fontSize: 12,
  },
})
export default HomePage
