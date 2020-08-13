import {Dimensions} from 'react-native'

// 当前屏幕尺寸
const deviceWidthDp = Dimensions.get('window').width

// 设计稿尺寸
const uiWidthPx = 750

function pxSize (uiElementPx) {
  return (uiElementPx * deviceWidthDp) / uiWidthPx
}

export default pxSize
