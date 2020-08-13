import React, { SFC } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'

type Props = {
  navigation: NavigationStackProp
}

const LoginPage: SFC<Props> = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Text>{"login"}</Text>
      {/* <Button
        title={"去登录页"}
        onPress={() => {
          navigation.navigate("Login")
        }}
      ></Button> */}
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
export default LoginPage
