// vue.config.js
module.exports = {
  //npm run build 的时候默认的dist文件夹名字会变成timeoutRemind，普通的npm run serve就不会，主要是上线路径的适应。
  publicPath: process.env.NODE_ENV === 'production' ? '/timeout-remind/' : '/',

  devServer: {
    //新版的webpack-dev-server增加了安全验证，默认检查hostname，如果hostname不是配置内的，将中断访问。
    //用natapp内网穿透的时候会出现 Invalid Host header，设置这个就不会进行安全验证，
    //配合内网穿透插件natapp，手机跟电脑就不需要在同一个局域网内也可以进行真机测试。
    disableHostCheck: true,

    open: true, //浏览器自动打开页面

    //host，真机测试IP地址，也就是你自己电脑的IP，你手机要跟你电脑在同一个局域网内，
    //特别强调，注意开发调试时的console.log()，打印过多会撑爆微信浏览器缓存，就打不开页面了，坑死。
    //访问192.163.1.109:8090就能真机测试啦，下面跨域的设置配好了也不用担心跨域问题。
    // host: "1192.163.1.109",
    // host: "localhost",

    //真机测试端口
    port: 8080,
    https: false,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）

    //配置跨域
    // proxy: {
    //   //这个/api就是在封装http那个host用的，代表下面target的那串接口。
    //   '/api': {
    //     // target: "http://192.163.1.90:8080/mobile/operation/reportForm",//这里是你同事给你的数据接口，域名是另一台电脑的域名。
    //     target: "http://4pss6n.natappfree.cc/mobile/operation/reportForm",//配合natapp真机测试。
    //     ws:true,
    //     changOrigin:true,//是否跨域
    //     pathRewrite:{
    //       '^/api':'/'//路径重写，不知道是什么意思，但一定要写，除非是简单版的跨域配置。
    //     }
    //   }
    // }
  }
}
