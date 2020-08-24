"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var routerHelper_1 = require("../../../router/routerHelper");
var getScreenWidth_1 = require("../../../utils/getScreenWidth");
// import AntDesign from 'react-native-vector-icons'
// @ts-ignore
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var commonColors_1 = require("../../../utils/commonColors");
var dataList = [
    {
        title: "体检预约",
        subTitle: "实时预约",
        image: "caretdown",
        onTap: function () {
            routerHelper_1["default"].navigate("ReservationList");
        }
    },
    {
        title: "报告查询",
        subTitle: "一键查询",
        image: "caretdown",
        onTap: function () {
            routerHelper_1["default"].navigate("Login");
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
var screenWidth = getScreenWidth_1["default"]();
var width = (screenWidth - 10 * 3) / 2;
var FunctionNavigate = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.wrapper }, dataList.map(function (item) {
        return react_1["default"].createElement(react_native_1.TouchableOpacity, { key: item.title, onPress: function () {
                item.onTap && item.onTap();
            } },
            react_1["default"].createElement(react_native_1.View, { style: styles.itemWrapper },
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { style: styles.title }, item.title),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.subTitle }, item.subTitle)),
                react_1["default"].createElement(AntDesign_1["default"], { name: item.image, size: 30, color: commonColors_1["default"].primary })));
    })));
};
var styles = react_native_1.StyleSheet.create({
    wrapper: {
        paddingTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemWrapper: {
        width: width,
        backgroundColor: commonColors_1["default"].white,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        borderRadius: 8
    },
    textWrapper: {},
    title: {
        color: commonColors_1["default"].black,
        fontSize: 16,
        height: 20
    },
    subTitle: {
        color: commonColors_1["default"].gray,
        fontSize: 12
    }
});
exports["default"] = FunctionNavigate;
