"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
//默认数据
var defaultDataList = [
    {
        title: "入职无忧套餐",
        subTitle: "基本检查，包含入职要求所有项目",
        imageUri: "https://wx1.sinaimg.cn/mw690/005SQLxwly1g9ey2fny93j306e050wf5.jpg",
        sex: "不限",
        age: "20-60",
        id: "login1"
    },
    {
        title: "浪漫七夕体检-青年版",
        subTitle: "七夕节新品--免费升级前列腺",
        imageUri: "https://wx3.sinaimg.cn/mw690/005SQLxwly1g9ey2fnqljj306e05074x.jpg",
        sex: "男",
        age: "20-40",
        id: "login2"
    },
    {
        title: "青年套餐A",
        subTitle: "针对青年人群 消化道疾病筛查 重要器官高清多普勒B超 肿瘤标志物检测",
        imageUri: "https://wx3.sinaimg.cn/mw690/005SQLxwly1g9ey2foa8fj306e05074y.jpg",
        sex: "不限",
        age: "20-40",
        id: "login3"
    },
    {
        title: "中老年套餐A",
        subTitle: "针对中老年人群 消化道器官检查 心脑血管疾病筛查...",
        imageUri: "https://wx3.sinaimg.cn/mw690/005SQLxwly1g9ey2fnhhkj306e0500t7.jpg",
        sex: "女",
        age: "30-70",
        id: "login4"
    }
];
//下拉下单选择项
var dropDownData = ["不限", "男", "女"];
//箭头名称
var IconNames;
(function (IconNames) {
    IconNames["up"] = "md-arrow-dropup";
    IconNames["down"] = "md-arrow-dropdown";
})(IconNames || (IconNames = {}));
var ReservationListPage = function () {
    return (react_1["default"].createElement(react_native_1.FlatList, { ListHeaderComponent: react_1["default"].createElement(react_native_1.Text, null, "Header"), data: defaultDataList, ItemSeparatorComponent: function () { return react_1["default"].createElement(react_native_elements_1.Divider, null); }, renderItem: function (_a) {
            var item = _a.item;
            return react_1["default"].createElement(react_native_1.Text, null, item.title);
        } }));
};
exports["default"] = ReservationListPage;
