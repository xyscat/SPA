# SPA 开发指南

- 什么是单页面 Web 应用？

> single page web app SPA，应用前端到后端都使用JavaScript：浏览器端应用、Web服务器和数据库。
> SPA，只有一张 Web 页面的应用。浏览器开始加载必需的 HTML、CSS 和 JavaScript，然后所有的操作都在这个页面上完成，这一切都由 JavaScript 控制。
> SPA 会包含大量的 JavaScript 代码，会很复杂，模块化开发和架构设计很重要。

SPA的崛起，框架：Backbone.js、Ember.js、Angular.js。模块加载器：RequireJS。


## 目录：

- 1 介绍 SPA
- 2 JavaScript
- 3 SPA 架构
- 4 功能模块
- 5 构建 Model 模块
- 6 Model 其他工作
- 7 Web 服务器 Node.js
- 8 数据库 MongoDB
- 9 SPA 细节
- 附录A JavaScript 编码标准
- 附录B SPA 的测试

## 章节划分

- 第一部分
- 1 第一个 SPA
- 2 温故 JavaScript
- 第二部分
- 3 开发 shell
- 4 添加功能模块
- 5 构建 Model
- 6 完成 Model 和 Data 模块
- 第三部分
- 7 Web 服务器
- 8 服务器数据库
- 9 SPA 发布准备
- 附录A JavaScript 编码标准
- 附录B SPA 的测试


## 第一部分 SPA 简介

SPA是另一种更好的开发 Web 应用的方法。SPA 是在浏览器中运行的桌面应用。

- SPA 是什么？有什么优势？
- 开发 SPA，如何提升 JavaScript 技能？
- 如何构建 SPA 的 Hello World


## 1 第一个 SPA

- SPA 定义
- SPA 平台：Java、flash、JavaScript
- 构建第一个 SPA
- SPA 对用户的好处


### SPA 定义

SPA 是指在浏览器中运行的应用，在使用期间页面不会重新加载。


### SPA 平台：Java、flash、JavaScript

不需要插件、不臃肿、一种客户端语言、页面更流畅更具交互性。

Web 浏览器 app、浏览器中的JavaScript运行环境、部署简单、跨平台开发、运行速度快、高级功能的引入、HTML5、SVG和CSS3支持、Web项目整个过程都使用JavaScript、硬件设备的提高。

> 生成式的JavaScript：
> 使用另一种语言来编写代码，再转换成JavaScript。
> JavaScript生成器：CoffeeScript，将一种自定义的语言转换成JavaScript。

### 构建第一个 SPA

- 第一步：创建文件结构

项目根目录`quickstart`，根目录下文件`spa.html`创建应用，创建`css/style.css`文件，外部库使用jQuery。

- 第二步：编写HTML和CSS

编写`style.css`文件，为`spa.html`中的容器添加样式。

- 第三步：添加 JavaScript

> JSLint：使用JSLint会确保代码不会有常见的JavaScript编码错误。

- SPA 对用户的好处

## 2 温故 JavaScript