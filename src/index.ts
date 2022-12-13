import { createApp } from "vue";
import router from "./router";
import "dayjs/locale/zh-cn";
import App from "./app.vue";
// import "element-plus/theme-chalk/dark/css-vars.css";
import { ElCollapseTransition } from "element-plus";
import "element-plus/theme-chalk/base.css";
import "normalize.css";
// TODO: 导入mock

const app = createApp(App);

app.config.errorHandler = (err, instance, info) => {
  console.log("------捕获应用内抛出的错误", err, instance, info);
};

// 开启浏览器开发工具“性能/时间线”页中组件的追踪
app.config.performance = process.env.NODE_ENV !== "production";

// 注册全局自定义指令(自定义指令主要是为了重用，涉及底层DOM元素访问的逻辑)
// app.directive("", {});

// 添加应用级依赖
// app.provide("", "");

// 注册全局属性
// app.config.globalProperties.msg = "";

// 注册全局组件
app.component(ElCollapseTransition.name, ElCollapseTransition);

// 安装全局插件
app.use(router);

// 挂载根应用
app.mount("#root");
