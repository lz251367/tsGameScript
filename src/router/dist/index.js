"use strict";
exports.__esModule = true;
var react_navigation_stack_1 = require("react-navigation-stack");
var home_1 = require("../views/home");
var login_1 = require("../views/login");
var bookingDetails_1 = require("../views/bookingDetails");
var commonColors_1 = require("../utils/commonColors");
var reservationList_1 = require("../views/reservationList");
var Router = react_navigation_stack_1.createStackNavigator({
    Home: {
        screen: home_1["default"],
        navigationOptions: {
            title: '首页'
        }
    },
    Login: {
        screen: login_1["default"],
        navigationOptions: {
            title: '登录'
        }
    },
    BookingDetails: {
        screen: bookingDetails_1["default"],
        navigationOptions: {
            title: '预约详情'
        }
    },
    ReservationList: {
        screen: reservationList_1["default"],
        navigationOptions: {
            title: '体检预约'
        }
    }
}, {
    initialRouteName: 'ReservationList',
    defaultNavigationOptions: {
        headerTintColor: commonColors_1["default"].primary
    }
});
exports["default"] = Router;
