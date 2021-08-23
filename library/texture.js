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
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      context.activeTexture(context.TEXTURE0);
      var texture = context.createTexture();
      context.bindTexture(context.TEXTURE_2D, texture);
      context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, img);
      context.texParameterf(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.LINEAR);
      context.texParameterf(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR);
      context.uniform1i(attribute, 0);
      callback && callback();
    };
    img.src = source;
  };
})(window['Texture'] || (window['Texture'] = {}));