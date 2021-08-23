/**
 * 该工具类主要封装一些WebGL的常用工具
 */
(function(exports) {
    /**
     * 检查当前浏览器是否支持WebGL环境
     * @returns 
     */
    exports.detectWebGLEnv = function() {
      try {
        return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
      } catch (e) {
        return false;
      }
    };

   /**
    * 创建WebGL的盛放容器并获取canvas
    * @param {string} container  eg: '#contaienr'
    * @returns 
    */
    exports.createWebGLCanvas = function(container) {

      // 我们这里使用动态插入的方式，来使我们的编辑器能够获得ctx的语法提示
      var canvas = document.createElement("canvas");
      // 获取container 的元素
      var containerEle = document.getElementById(container);
      // 这里将canvas的大小设置为和container的大小一样
      var clientWidth = containerEle.clientWidth;
      var clientHeight = containerEle.clientHeight;
      canvas.height = clientHeight;
      canvas.width = clientWidth;
      // 将创建好的canvas 插入到对应的容器之中
      containerEle.appendChild(canvas);

      return canvas;
    };

    /**
     * 获取WebGL的执行上下文
     * @param {*} canvas 
     * @returns 
     */
    exports.getWebGLContext = function(canvas) {
      this.detectWebGLEnv();
      var ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return ctx;
    };

    /**
     * 创建WebGL的着色器程序
     * @param {WebGLRenderingContext} ctx 
     * @param {string} vertexShader 
     * @param {string} fragmentShader 
     * @returns 
     */
     exports.initWebGLProgram = function(ctx, vertexShaderEle, fragmentShaderEle) {

       // 获取顶点着色器源码
       var vertexShaderSource =
         document.getElementById(vertexShaderEle).innerHTML;
       // 创建顶点着色器对象
       var vertexShader = ctx.createShader(ctx.VERTEX_SHADER);
       // 将源码分配给顶点着色器对象
       ctx.shaderSource(vertexShader, vertexShaderSource);
       // 编译顶点着色器对象
       ctx.compileShader(vertexShader);
 
       // 获取片元着色器源码
       var fragmentShaderSource = document.getElementById(fragmentShaderEle).innerHTML;
       // 创建片元着色器对象
       var fragmentShader = ctx.createShader(ctx.FRAGMENT_SHADER);
       // 把源码分配给片元着色器
       ctx.shaderSource(fragmentShader, fragmentShaderSource);
       // 编译片元着色器对象
       ctx.compileShader(fragmentShader);
 
       // 创建着色器程序
       var program = ctx.createProgram();
       // 将顶点着色器附着在着色器程序上
       ctx.attachShader(program, vertexShader);
       // 将片元着色器附着在着色器程序上
       ctx.attachShader(program, fragmentShader);
       // 连接着色器程序
       ctx.linkProgram(program);
       // 使用着色器程序
       ctx.useProgram(program);
       // 返回连接器对象
       return program;
 
    };
  })(window['WebGLHelper'] || (window['WebGLHelper'] = {}));