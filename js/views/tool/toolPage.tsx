import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

class ToolPage extends Component {
  static navigationOptions = {
    tabBarLabel: '工具',
    babBarIcon: ({focused}) => {
      if (focused) {
        return (
          <View style={styles.tabView}>
            <Image
              style={styles.tabIcon}
              source={require('../../assets/images/toolS.svg')}></Image>
            <Text styles={(styles.select, styles.tabText)}>工具</Text>
          </View>
        )
      }
      return (
        <View style={styles.tabView}>
          <Image
            style={styles.tabIcon}
            source={require('../../assets/images/tool.svg')}></Image>
          <Text styles={styles.tabText}>工具</Text>
        </View>
      )
    },
  }
  render () {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>工具页面</Text>
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
export default ToolPage
