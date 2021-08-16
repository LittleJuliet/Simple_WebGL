/* const colorToRGB = (val, opa) => {
  var pattern = /^(#?)[a-fA-F0-9]{6}$/; // 16进制颜色值校验规则
  var isOpa = typeof opa == "number"; // 判断是否有设置不透明度

  if (!pattern.test(val)) {
    // 如果值不符合规则返回空字符
    return "";
  }

  var v = val.replace(/#/, ""); // 如果有#号先去除#号
  var rgbArr = [];
  var rgbStr = "";

  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }

  rgbStr = rgbArr.join();
  rgbStr =
    "rgb" + (isOpa ? "a" : "") + "(" + rgbStr + (isOpa ? "," + opa : "") + ")";
  return rgbStr;
};

console.log(colorToRGB('#ffff00', 1)); */

const hexColorToRgba = (hexColor, alphaMaxVal = 1) => {
  hexColor = hexColor.replace("#", "");

  //用于分割16进制色彩通道
  let reg = new RegExp("\\w{1,2}", "g");
  //分割颜色通道
  let rgbaArray255 = hexColor.match(reg);
  console.log('rgbaArray255:', rgbaArray255);
  rgbaArray255 = rgbaArray255.map((channel, index) => {
    //计算每个通道的10进制值
    let colorVal = parseInt(channel, 16);
    if (index === 3) {
      //这是alpha通道
      return Math.round(colorVal / (255 / alphaMaxVal) * 100) / 100
    }
    return colorVal;
  });
  if (rgbaArray255.length === 3) {
    rgbaArray255.push(1);
  }
  return rgbaArray255;
}

console.log(hexColorToRgba('#00FFFF00'));
