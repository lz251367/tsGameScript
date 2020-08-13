import React, { SFC } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
  navigation: NavigationStackProp<string, { pageName: number }>
}

const BookingDetailsPage: SFC<Props> = ({ navigation }) => {
  let name = navigation.getParam('pageName', 1)
  return (
    <View style={styles.home}>
      <Text>{`体检预约${name}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default BookingDetailsPage
