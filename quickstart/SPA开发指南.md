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

### SPA 对用户的好处

好处：提供更加吸引人的用户体验。

桌面应用的即时性、网站的可移植性和可访问性。

- SPA 快速渲染和即时反馈，传统网站很差。
- SPA 把工作数据和处理过程从服务器转移至浏览器端。
- SPA 用户访问服务器时，可以动态显示当前访问状态。
- SPA 访问终端 浏览器即可。
- SPA 版本更新发布和网站一样。
- SPA 跨平台的。

原生的 SPA，使用的工具jQuery、TaffyDB2、Node.js、Socket.IO、MongoDB。

简单聊天滑块 SPA，表现的 SPA 特征：

- 用户输入即时响应
- 客户端存储数据进行决策判断
- JSLint确保应用不包含常见的JavaScript错误
- jQuery来选取DOM，为DOM添加动画效果，用户点击时的事件处理

## 2 温故 JavaScript

- 变量作用域、函数提升、执行环境对象
- 变量作用域链，为什么要使用它？
- 使用原型创建JavaScript对象
- 自执行匿名函数
- 模块模式和私有变量
- 闭包的乐趣和好处

> 编码标准和JavaScript语法:

### 变量作用域

> JavaScript 1.7、1.8、1.9+和块作用域：
> 
> JavaScript 1.7 引入 let 语句，它是一种全新的块作用域构造器。
> 
> `<script type="application/javascript;version = 1.7">`

### 变量提升

### 高级变量提升

JavaScript引擎在进入作用域时，会对代码分两轮处理：

- 初始化变量：
	- 声明并初始化函数参数
	- 声明局部变量，包括匿名函数赋给一个局部变量，不初始化
	- 声明并初始化函数 
- 执行代码

### 执行环境对象

JavaScript引擎把变量作为属性保存在一个对象上，这个对象称为执行环境对象。

执行环境是一种概念，是运行中的函数的意思，它不是对象。

所有在函数中定义的变量和函数都是执行环境的一部分。

执行环境对象是对执行环境的 ECMA 标准实现，在JavaScript引擎中，执行环境对象是一种对象，不是在JavaScript中可以直接访问的变量，间接地访问执行环境对象很容易，每次使用变量，就是访问执行环境对象的属性。

> JavaScript引擎 变量保存在哪儿？
> 
> JavaScript引擎把声明和初始化的变量当做执行环境对象的属性。
> 执行环境对象是JavaScript实现层面的东西，在开发中无法直接访问。

### 作用域链

JavaScript引擎在执行环境对象中访问作用域内的变量，查找的顺序叫做作用域链。

浏览器环境的顶级环境对象：window，Node.js环境的顶级环境对象：global。

> 全局变量
> 通常说的全局变量是执行环境顶层对象的属性。

### JavaScript对象

JavaScript对象是基于原型的，其它语言是基于类的对象。

> 基于类的对象：
> 
> 对象：使用类来描述它是什么样的。
> 基于类的对象，必须定义类，定义构造函数，然后实例化对象。

基于原型的对象系统：

- 定义原型对象
- 定义对象的构造函数：构造函数和原型是分开的
- 将构造函数关联到原型：需要连接
- 实例化对象

> Object.create(proto)等价于new操作符，会更能体现基于原型的思想。它把原型作为参数并返回一个对象。

**使用Object.create()和工厂函数：**

使用原型创建共享相同属性的对象，是把对象的创建封装了一下而已。

> 浏览器中的Object.create()：
> 在IE 9+、Firefox 4+、Safari 5+、chrome 5+ 中有效。


```

	// Object.create()的跨浏览器支持
	var objectCreate = function(arg){
		if(!arg){return {};}
		function obj(){};
		obj.prototype = arg;
		return new obj;
	};
	
	Object.create = Object.create || objectCreate;

	
```

### 原型链

基于原型的JavaScript中，对象属性的实现方式和功能不同于基于类的系统。

JavaScript使用原型链来解析属性值。

原型链描述了就JavaScript引擎如何从对象查找到原型以及原型的原型，来定位对象的属性值。

原型：保存在对象的_proto_属性中的对象。

原型也是对象，所以也有原型。

顶层是Object的原型。

### 函数深入

JavaScript中函数是对象、用于控制变量作用域、提供私有变量和方法。

- 函数和匿名函数

> 自执行匿名函数：
> 定义时没有名字并没有保存给变量，立即执行。
> 避免了全局命名空间污染。

- 模块模式 私有变量的引入

- 闭包







