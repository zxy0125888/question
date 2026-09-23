module.exports = {
  // 是否作为ESLint配置的根文件；true时不再向上级目录查找父级eslint配置
  root: true,

  // 定义代码运行环境，注册对应环境的全局变量，防止出现未定义的误报
  env: {
    browser: true, // 浏览器环境，可以使用 window、document 等浏览器全局API
    es2021: true, // 启用 ES2021 的语法支持
    node: true, // node环境，可以使用 process、require 等node全局变量
  },

  // 继承现有的规则预设；后面的配置会覆盖前面的同名规则
  extends: [
    "react-app", // CRA官方提供的react基础eslint规则
    "react-app/jest", // CRA针对jest单元测试的校验规则
    "eslint:recommended", // ESLint官方推荐的原生JS基础校验规则
    "plugin:@typescript-eslint/recommended", // @typescript‑eslint插件提供的TS推荐校验规则
    "plugin:prettier/recommended",
  ],

  // 指定解析器：让eslint能够识别ts/tsx语法（eslint原生只支持js）
  parser: "@typescript-eslint/parser",

  // 给解析器传递配置选项
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 开启JSX语法解析，React组件<>标签语法必须开启此项
    },
    ecmaVersion: "latest", // 支持最新版本的ECMAScript语法
    sourceType: "module", // 业务代码使用ESModule，支持 import / export 导入导出语法
  },

  // 注册eslint插件；插件只是注册，不会自动启用规则，需要extends或者rules开启
  plugins: ["react", "@typescript-eslint"],

  // 自定义校验规则，可以覆盖extends继承过来的规则
  // 规则等级取值： "off"(0)关闭，"warn"(1)警告黄色波浪，"error"(2)错误红色，打包会失败
  rules: {
    // 使用any类型的时候给出黄色警告，不阻断打包；如果改为error写any直接报错
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error",
  },
};
