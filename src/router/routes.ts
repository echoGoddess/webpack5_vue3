/**
 * 懒加载
 * 使用函数动态导入组件，避免最终构建的包过大
 * 配合webpack的代码分割，缩小打包体积
 */
const Home = () => import("@/views/home/index.vue");
const Login = () => import("@/views/login/index.vue");

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      requireAuth: true
    },
    component: Login
  }
];

export default routes;
