/**
 * 该工具类主要封装一些WebGL绕轴旋转的函数
 */
 (function(exports) {

  /**
   * 绕Y轴进行旋转
   * @param {*} angle 
   * @param {*} target 
   * @returns 
   */
  exports.rotationY = function(angle, target) {
  target = target || new Float32Array(16);
  var sin = Math.sin(angle);
  var cos = Math.cos(angle);

  target[0] = cos;
  target[1] = 0;
  target[2] = -sin;
  target[3] = 0;
  target[4] = 0;
  target[5] = 1;
  target[6] = 0;
  target[7] = 0;
  target[8] = sin;
  target[9] = 0;
  target[10] = cos;
  target[11] = 0;
  target[12] = 0;
  target[13] = 0;
  target[14] = 0;
  target[15] = 1;

  return target;
  }

  /**
   * 绕X轴进行旋转
   * @param {*} angle 
   * @param {*} target 
   * @returns 
   */
  exports.rotationX = function(angle, target) {
    target = target || new Float32Array(16);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);

    target[0] = 1;
    target[1] = 0;
    target[2] = 0;
    target[3] = 0;
    target[4] = 0;
    target[5] = cos;
    target[6] = sin;
    target[7] = 0;
    target[8] = 0;
    target[9] = -sin;
    target[10] = cos;
    target[11] = 0;
    target[12] = 0;
    target[13] = 0;
    target[14] = 0;
    target[15] = 1;

    return target;
  }

  /**
   * 绕Z轴进行旋转
   * @param {*} angle 
   * @param {*} target 
   * @returns 
   */
  exports.rotationZ = function (angle, target) {
    target = target || new Float32Array(16);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);

    target[0] = cos;
    target[1] = sin;
    target[2] = 0;
    target[3] = 0;
    target[4] = -sin;
    target[5] = cos;
    target[6] = 0;
    target[7] = 0;
    target[8] = 0;
    target[9] = 0;
    target[10] = 1;
    target[11] = 0;
    target[12] = 0;
    target[13] = 0;
    target[14] = 0;
    target[15] = 1;

    return target;
  }


})(window['WebGLAnimateRotation'] || (window['WebGLAnimateRotation'] = {}));