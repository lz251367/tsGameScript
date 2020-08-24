import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { SFC } from 'react'
import routerHelper from '../../../router/routerHelper'
import getScreenWidth from '../../../utils/getScreenWidth'
// import AntDesign from 'react-native-vector-icons'
// @ts-ignore
import Icon from 'react-native-vector-icons/AntDesign'
import commonColors from '../../../utils/commonColors'

const dataList = [
  {
    title: "体检预约",
    subTitle: "实时预约",
    image: "caretdown",
    onTap: () => {
      routerHelper.navigate("ReservationList");
    }
  },
  {
    title: "报告查询",
    subTitle: "一键查询",
    image: "caretdown",
    onTap: () => {
      routerHelper.navigate("Login");
    }
  },
  {
    title: "健康评估",
    subTitle: "了解自身健康",
    image: "caretdown",
    onTap: null
  },
  {
    title: "健康干预",
    subTitle: "采集状况",
    image: "caretdown",
    onTap: null
  },
  {
    title: "健康档案",
    subTitle: "掌上查询",
    image: "caretdown",
    onTap: null
  },
  {
    title: "健康资讯",
    subTitle: "资讯一览",
    image: "caretdown",
    onTap: null
  }
];

const screenWidth = getScreenWidth()

const width = (screenWidth - 10 * 3) / 2

const FunctionNavigate = () => {
  return (
    <View style={styles.wrapper}>
      {
        dataList.map(item =>
          <TouchableOpacity key={item.title} onPress={() => {
            item.onTap && item.onTap()
          }}>
            <View style={styles.itemWrapper}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              </View>
              <Icon name={item.image} size={30} color={commonColors.primary}></Icon>
            </View>
          </TouchableOpacity>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  itemWrapper: {
    width,
    backgroundColor: commonColors.white,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderRadius: 8
  },

  textWrapper: {

  },
  title: {
    color: commonColors.black,
    fontSize: 16,
    height: 20,
  },
  subTitle: {
    color: commonColors.gray,
    fontSize: 12
  }
})

export default FunctionNavigate