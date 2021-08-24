/**
 * 该工具类主要封装一些WebGL的纹理类
 */
(function (exports) {
  /**
   * 创建一个纹理贴图
   * @param {*} context
   * @param {*} source
   * @param {*} attribute
   * @param {*} callback
   */
  exports.createTexture = function (context, source, attribute, callback) {
    var img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
      context.activeTexture(context.TEXTURE0); // 激活0号纹理单元TEXTURE0
      var texture = context.createTexture(); // 创建纹理图像缓冲区
      context.bindTexture(context.TEXTURE_2D, texture); // 绑定纹理缓冲区
      // 设置纹素格式
      // jpg格式对应gl.RGB, png格式对应gl.RGBA
      // 第5个参数表示RGB每个分量占一个字节
      context.texImage2D(
        context.TEXTURE_2D,
        0,
        context.RGBA,
        context.RGBA,
        context.UNSIGNED_BYTE,
        img
      );
      // 纹理图的填充方式
      // 当纹理图小于绘制区域时
      context.texParameterf(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.LINEAR);
      // 当纹理图大于绘制区域时
      context.texParameterf(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR);
      // 纹理缓冲区单元TEXTURE0中的颜色数据传入片元着色器
      context.uniform1i(attribute, 0);
      callback && callback();
    };
    img.src = source;
  };
})(window["Texture"] || (window["Texture"] = {}));
