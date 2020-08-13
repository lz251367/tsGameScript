import React, { SFC } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
  navigation: NavigationStackProp
}

const HomePage: SFC<Props> = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Text>{"homeS"}</Text>
      <Button
        title={"去登录页"}
        onPress={() => {
          navigation.navigate("Login")
        }}
      ></Button>
      <Button
        title={"去体检预约一"}
        onPress={() => {
          navigation.navigate("BookingDetails", {
            pageName: 1
          })
        }}
      ></Button>
      <Button
        title={"去体检预约二"}
        onPress={() => {
          navigation.navigate("BookingDetails", {
            pageName: 2
          })
        }}
      ></Button>
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
export default HomePage
