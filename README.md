# react项目
## 创建git仓库 

## 获取密钥  cat ~/.ssh/id_rsa.pub

## 镜像  
### npm config get registry
### npm config set registry https://registry.npmmirror.com  

## react脚手架 create-Reaact-App、vite

## 创建react项目(选择create-react-app 官方推荐 时间久 稳定)
### npx create-react-app project1(项目名) (--template typescript 如果不加默认语言为js)
### vite:  npm create vite@latest project2 -- --template react-ts(默认是vue)  (node22+)

## 编码规范
### eslint 检查语法语义，如变量未定义、变量未使用
### prettier 检查编码风格，如单引号或双引号

# 提交规范 husky(git hooks)
## commit-lint限制commit格式规范



# 遇到的问题
## 在create-react-app项目下安装eslint失败 npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev？
因为creat-react-app创建项目 生成出来就是 `react‑scripts@5.0.1`（2022 年发布的版本），**已经没有新版本 CRA 了**！
- 底层构建工具：老 **Webpack**（不是 Vite）。
- eslint 版本锁死 v5（遇到 eslint 冲突的根源）。
- 没有后续 6.0、7.0 版本；以后不会更新模板了。
如果要安装eslint必须锁定版本号 npm install eslint @typescript-eslint/parser@^5.62.0 @typescript-eslint/eslint-plugin@^5.62.0 --save-dev

## 安装完5.62.0版本的eslint后，用npx eslint --init生成的配置文件名称为eslint.config.mjs而不是eslintrc.js为什么？
package.json中 "typescript-eslint": "^8.70.0"是新版的，所以npx eslint 初始化安装出了新的配置，新配置在老的car项目中不兼容。

## 安装了低版本的eslint，使用以下两个命令还是会生成新版本文件
-$env:ESLINT_USE_FLAT_CONFIG="false"; npx eslint --init  
-npx @eslint/create-config --eslintrc

## 安装prettier报错，npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
--package.json里出现@eslint/js 改依赖在老项目不应该出现，flat-eslint文件才会用到，卸载后重新安装prettier。


## commit-lint在husky中校验不执行问题？
--不手动创建commit-msg文件，文件一定是LF换行，husky9中文件开头加#!/usr/bin/env sh