# creat-react-app创建的react项目
-npx create-react-app project1(项目名) (--template typescript 如果不加默认语言为js)

# node版本 
## node20+

# 格式化校验
## husky
-npm install husky --save-dev
-npx husky init

## eslint
-开发环境安装插件命令： npm install eslint @typescript-eslint/parser@^5.62.0 @typescript-eslint/eslint-plugin@^5.62.0 --save-dev
-配置文件 npx eslint --init (无效 需要手动配置)、安装eslint 插件。

## prettier
-安装命令 npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
-安装Prettier - Code formatter插件。

## 增加校验命令
-package.json中加入"lint": "eslint src/**/*.{js,ts,jsx,tsx}", "lint: fix": "eslint src/**/*.{js,ts,jsx,tsx} --fix","format": "prettier --write src/**/*.{js,ts,jsx,tsx} ./*.{js,ts,jsx,tsx,cjs}"

## 增加pre-commit
```
npm run lint
npm run format
git add .

```
-注意： 文件保存时行尾序列必须是LF
 
# 提交检验commit-lint
-安装 npm install @commitlint/cli @commitlint/config-conventional --save-dev
-创建commit-msg:  echo 'npx --no -- commitlint --edit $1' > .husky/commit-msg

# 检查husky是否绑定git
 git config core.hooksPath
# 语言
-使用typescript，类型校验、泛型T写一次代码，支持多种类型，比如 identity<T>(value: T): T 这样的通用函数。接口与类型别名用 interface 定义对象结构，用 type 定义联合类型或交叉类型，让数据“形状”一目了然。

# 打包方式
-create-react-app 内置webpack打包方式。

# 启动方式
-npm i
-npm run start