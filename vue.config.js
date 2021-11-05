module.exports = {
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    if (process.env.VUE_APP_NODE_ENV == 'production') {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true;
        args[0].terserOptions.compress.drop_debugger = true;
        args[0].terserOptions.compress.pure_funcs = ['console.log'];
        args[0].terserOptions.output = {
          comments: false
        };
        return args;
      });
    }
  },
  css: {
    loaderOptions: {}
  },
  devServer: {
    disableHostCheck: true
  }
};
console.log('当前环境...', process.env.VUE_APP_NODE_ENV);
