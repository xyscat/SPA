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

## 第二部分 SPA客户端

SPA客户端，提供的不只是UI。精心开发的SPA客户端就是桌面应用。

SPA客户端很传统网页本质是不同的。整套软件工具改变了：从数据服务器到HTML模板。关注工程师的才能、规则、客户端测试。服务器关注JSON数据服务。

记得JavaScript、HTML5、CSS3、SVG、CORS和其他技能。我们构建的是桌面应用，不是传统网站。

- 构建和测试大规模的、可测试的和强大对的SPA客户端
- 使后退按钮、标签和其他历史控件按预期那样工作
- 设计、实现和测试健壮的功能模块和它们的API
- 使得UI能在移动设备和桌面无缝地工作
- 组织代码以便大大地改进测试、团队开发和面向质量的设计design for quality

> SPA框架库如何选择？

## 3 开发 Shell

- 描述 Shell 模块及它在架构中的地位
- 组织文件和名字空间
- 创建功能容器，为之设计样式
- 使用事件处理程序来切换功能容器
- 使用锚接口模式来管理应用的状态

### 深刻理解Shell

Shell是SPA的主控制器master controller，是架构中必须的。

Shell模块 -------------飞机的外壳

飞机的外壳：是飞机的形状和结构。所有配件组织起来的结构。

Shell模块：是SPA的形状和结构。所有功能模块依靠API依附在Shell上。


Shell只是架构的一部分。shell好像是用户和功能模块之间的桥梁。

习惯MVC架构的人，会把Shell当做主控制器，它协调所有从属功能模块的控制器。

Shell负责：

- 渲染和管理功能容器
- 管理应用状态
- 协调功能模块

### 创建文件和名字空间

每个JavaScript名字空间都会有一个对应的JavaScript文件，并使用自执行匿名函数，避免污染全局名字空间。平行的CSS文件结构。

**创建文件结构**

spa为SPA的根名字空间。JavaScript和CSS文件名，JavaScript名字空间和CSS选择器名称同步。

- 规划目录的文件

图片插入

- 安装jQuery和插件

jQuery库提供跨平台DOM操作和其他工具方法。

jQuery-1.9.1.js

jQuery的uriAnchor插件提供管理URL的锚组件的工具方法。

jquery.uriAnchor-1.1.3.js

- 编写应用的HTML文件

spa.html用来加载库和样式表，然后启动Apps。

> 有性能意识的开发者会问：为什么不把脚本文件放在body容器的最后面呢？因为如果这样做的话，静态的HTML和CSS在JavaScript加载完成前就能显示，通常使得页面渲染更快。但是，SPA不是这样的，它使用JavaScript来生成HTML，因此将脚本放到后面，并不能更开地渲染页面。相反，放在head区域，可以改进组织结构和易读性。

- 创建CSS跟名字空间

spa.css文件。


```

	/*
	 * spa.css
	 *
	*/
	
	/** Begin reset */
	*{
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	h1,h2,h3,h4,h5,h6,p{margin-bottom: 10px;}
	ol,li,dl{list-style-position: inside;}
	/** End reset */
	
	/** Begin standard selectors */
	body{
		font: 13px 'Trebuchet MS', Verdana, Helvetica, Arial, sans-serif;
		color: #444;
		background-color: #888;
	}
	a{text-decoration: none;}
		a:link,a:visited{color:inherit;}
		a:hover{text-decoration: underline;}
	
	strong{
		font-weight: 800;
		color: #000;
	}
	/** End standard selectors */
	
	/** Begin spa namespace selectors */
	#spa{
		position: absolute;
		top: 8px;
		left: 8px;
		bottom: 8px;
		right: 8px;
	
		min-height: 500px;
		min-width: 500px;
		overflow: hidden;
	
		background-color: #fff;
		border-radius: 0 8px 0 8px;
	}
	/** End spa namespace selectors */
	
	/** Begin 通用选择器 */
	.spa-x-select {}
	.spa-x-clearfloat {
		height: 0 !important;
		float: none !important;
		visibility: hidden !important;
		clear: both !important;
	}
	/** End 通用选择器 */

```

根据我们的编码标准，文件中所有的CSS id 和 class 都以 spa-为前缀。

现在创建了应用的根CSS文件，我们将创建对应的JavaScript名字空间。

- 创建JavaScript根名字空间

跟名字空间时spa，附录A约定，根JavaScript应该叫做`spa/js/spa.js`。必须的JavaScript至少是 `var spa = {};`。但是，我们希望添加一个初始化应用的方法，希望确保代码通过 JSLint 的验证。可以使用 附录 A 中的模板，删去一些东西，因为不需要所有内容。填写下面的代码：

```

	/*
	 * spa.js
	 * 根名字模块
	*/
	
	/*  jslint browser : true, continue : true,
		devel : true, indent : 2, maxerr : 50,
		newcap : true, nomen : true, plusplus : true,
		regexp : true, sloppy :true, vars : false,
		white : true
	*/
	
	/* global $, spa */
	
	var spa = (function(){
		var initModule = function($container){
			$container.html(
				'<h1 style="display:inline-block; margin:25px;">'
				+ 'Hello World!' 
				+ '</h1>'
			);
		};
	
		return {initModule: initModule};
	}());

```

我们希望确保代码没有任何创建错误和不好而写法。附录A演示如何安装和运行 JSLint 工具。文件顶部的所有 /*jslint……*/ 开关的意思。

在命令行中输入 jslint spa/js/spa.js 检查代码，不应该看到任何警告和错误。

现在打开浏览文档 spa.html ，看看 Hello World！。

OK！开始下一节：构建第一个实际工作中的单页面应用。

### 创建功能容器

Shell 创建并管理着功能模块要用到的容器。比如，聊天滑块容器。Shell 负责管理滑块容器，但不会管理容器内部的行为，这归聊天功能模块。

网站的整体布局图：

画出了各个容器的布局。当然，这是一张图，我们需要把它转换为HTML和CSS。

- 选取策略

我们将在单独的`layout.html`中开发功能容器的HTML和CSS。只有先确定好容器的布局后，我们才能编写Shell的CSS和JavaScript文件。

先编写HTML，再添加样式。

- 编写Shell的HTML

HTML5、CSS3的主要功能，能彻底把样式和内容分离。根据图示来构建HTML代码。


```

	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>html layout</title>
		<link rel="stylesheet" href="css/spa.css">
	</head>
	<body>
		<div id="spa">
			<!-- logo、账户设置和head容器中的搜索框 -->
			<div class="spa-shell-head">
				<div class="spa-shell-head-logo"></div>
				<div class="spa-shell-head-acct"></div>
				<div class="spa-shell-head-search"></div>
			</div>
			<!-- 主容器 nav和content容器 -->
			<div class="spa-shell-main">
				<div class="spa-shell-main-nav"></div>
				<div class="spa-shell-main-content"></div>
			</div>
			<!-- footer容器 -->
			<div class="spa-shell-foot"></div>
			<!-- chat 容器，固定在右下角 -->
			<div class="spa-shell-chat"></div>
			<!-- modal容器，漂浮在其他内容上 -->
			<div class="spa-shell-modal"></div>
		</div>
	</body>
	</html>

```

现在应该验证HTML，确保它没有错误。使用 Tidy工具，他可以找出缺少的标签和其他常见的HTML错误。 在线版:http://infohound.net/tidy/。
源代码：http://tidy.sourcefotge.net/。

现在给这些容器添加一些样式，使其更好看点。

- 编写Shell的CSS

我们将编写支持流式布局liquid layout的CSS，除了一些极端的情况，内容的宽度和高度会完全自适应填充浏览器窗口。

我们会给功能容器添加背景色。我们避免使用边框，因为会改变CSS盒子的尺寸。

> 流式布局liquid layout
> 随着布局越复杂，我们可能需要JavaScript来支持布局的流动性liquidity。使用窗口尺寸变化的事件处理程序来确定浏览器窗口的尺寸，然后动态的使用新的CSS尺寸。后面会用到这个方法。

我们在layout.html的`<head>`区域添加CSS。可以把它放在spa.css样式表的后面。



```

	<style>
	      .spa-shell-head, .spa-shell-head-logo, .spa-shell-head-acct,
	      .spa-shell-head-search, .spa-shell-main, .spa-shell-main-nav,
	      .spa-shell-main-content, .spa-shell-foot, .spa-shell-chat,
	      .spa-shell-modal {
	        position : absolute;
	      }
	      .spa-shell-head {
	        top    : 0;
	        left   : 0;
	        right  : 0;
	        height : 40px;
	      }
	      .spa-shell-head-logo {
	        top        : 4px;
	        left       : 4px;
	        height     : 32px;
	        width      : 128px;
	        background : orange;
	      }
	      .spa-shell-head-acct {
	        top        : 4px;
	        right      : 0;
	        width      : 64px;
	        height     : 32px;
	        background : green;
	      }
	      .spa-shell-head-search {
	        top        : 4px;
	        right      : 64px;
	        width      : 248px;
	        height     : 32px;
	        background : blue;
	      }
	
	      .spa-shell-main {
	        top    : 40px;
	        left   : 0;
	        bottom : 40px;
	        right  : 0;
	      }
	      .spa-shell-main-content,
	      .spa-shell-main-nav {
	        top    : 0;
	        bottom : 0;
	      }
	      .spa-shell-main-nav {
	        width  : 250px;
	        background : #eee;
	      }
	        .spa-x-closed .spa-shell-main-nav {
	          width  : 0;
	        }
	
	      .spa-shell-main-content {
	        left  : 250px;
	        right : 0;
	        background : #ddd;
	      }
	        .spa-x-closed .spa-shell-main-content {
	          left : 0;
	        }
	
	      .spa-shell-foot {
	        bottom : 0;
	        left   : 0;
	        right  : 0;
	        height : 40px;
	      }
	      .spa-shell-chat {
	        bottom     : 0;
	        right      : 0;
	        width      : 300px;
	        height     : 15px;
	        background : red;
	        z-index    : 2;
	      }
	      .spa-shell-modal {
	        margin-top    : -200px;
	        margin-left   : -200px;
	        top           : 50%;
	        left          : 50%;
	        width         : 400px;
	        height        : 400px;
	        background    : #fff;
	        border-radius : 3px;
	        z-index       : 1;
	      }
	    </style>

```

打开layout.html，你会看到一张和设计布局类似的页面。当改变浏览器尺寸，功能容器也会动态改变尺寸。我们流式布局宽高小于500px时，就会出现滚动条。

在chrome的开发者工具上，可以测试一些类样式，初始页面不显示他们。比如，spa-shell-main容器上添加spa-x-closed类，会关闭页面左边的导航条，移除它会还原导航条。

### 渲染功能容器

我们创建了布局文档layout.html，现在将在SPA中使用它。第一步是让Shell来渲染容器，而不是使用静态的HTML和CSS。

- 将HTML转换为JavaScript

我们需要用JavaScript来管理所有文档变化，因此需要把前面所有的HTML转换为JavaScript字符串。我们会保留HTML的缩进排版，使它更易读和维护。


```

 	var main_html : String()
        + '<div class="spa-shell-head">'
          + '<div class="spa-shell-head-logo"></div>'
          + '<div class="spa-shell-head-acct"></div>'
          + '<div class="spa-shell-head-search"></div>'
        + '</div>'
        + '<div class="spa-shell-main">'
          + '<div class="spa-shell-main-nav"></div>'
          + '<div class="spa-shell-main-content"></div>'
        + '</div>'
        + '<div class="spa-shell-foot"></div>'
        + '<div class="spa-shell-chat"></div>'
        + '<div class="spa-shell-modal"></div>'


```

我们不用担心拼接字符串导致对的任何性能损失。当产品发布时，JavaScript压缩工具会替我们把字符串拼接在一起。

> 配置你的编辑器！
> 专业的开发人员，使用专业级别的文本编辑器或IDE。
> 大多支持正则表达式和macro宏。
> 我们应该使得HTML转换为JavaScript字符串这个一过程自动化。
> vim编辑器。

- 在JavaScript中添加HTML模板

当初始化Shell时，想让它根据我们的选择，使用功能模块来填充页面元素。在这时，我们想缓存jQuery集合对象。可以使用附录A中的模块模板，连同刚才创建的JavaScript字符串，完成这个功能。创建代码。编写Shell，spa.shell.js文件。


```

	/*
	 * spa.shell.js
	 * SPA 的 Shell 模块
	*/
	
	/*jslint         browser : true, continue : true,
	  devel  : true, indent  : 2,    maxerr   : 50,
	  newcap : true, nomen   : true, plusplus : true,
	  regexp : true, sloppy  : true, vars     : false,
	  white  : true
	*/
	
	/*global $, spa */
	
	spa.shell = (function(){
		//------------声明所有在 spa.shell 去开内可用的变量---------
		var
			// 把静态配置值放在 configMap 变量中
			configMap = {
				main_html : String()
					+ '<div class="spa-shell-head">'
			          + '<div class="spa-shell-head-logo"></div>'
			          + '<div class="spa-shell-head-acct"></div>'
			          + '<div class="spa-shell-head-search"></div>'
			        + '</div>'
			        + '<div class="spa-shell-main">'
			          + '<div class="spa-shell-main-nav"></div>'
			          + '<div class="spa-shell-main-content"></div>'
			        + '</div>'
			        + '<div class="spa-shell-foot"></div>'
			        + '<div class="spa-shell-chat"></div>'
			        + '<div class="spa-shell-modal"></div>'
			},
			// 将整个模块中共享的动态信息放在 stateMap 变量中
			stateMap = {$container : null},
			// 将 jQuery 集合缓存在 jqueryMap 中
			jqueryMap = {},
			// 此部分声明所有模块作用域内的变量
			setJqueryMap, initModule;
	
			// ---------- BEGIN 通用方法 ---------
			// ---------- END 通用方法 ----------
	
			// ---------- BEGIN DOM方法 ---------
			// 将创建和操作页面元素的函数放在 DOM方法 区块中
	
			// 使用setJqueryMap来缓存jQuery集合，可以减少jQuery对文档的遍历次数，提高性能
			setJqueryMap = function (){
				var $container = stateMap.$container;
				jqueryMap = {$container : $container};
			};
			// ---------- END DOM方法 ----------
	
	
			// ---------- BEGIN 事件处理程序 ---------
			// ---------- END 事件处理程序 ----------
	
			// ---------- BEGIN 公共方法 ---------
			
			// 创建initModule 公开方法，用于初始化模块
			initModule = function($container){
				stateMap.$container = $container;
				$container.html(configMap.main_html);
				setJqueryMap();
			};
	
			// 显式地导出公开方法，以映射map的形式返回
			return {initModule : initModule};
			// ---------- END 通用方法 ----------
	}());

```
现在有了渲染功能容器的模块，但仍染需要填写CSS文件，指示根名字空间模块spa.js来使用Shell模块spa.shell.js，而不是仅显示Hello World！。下面开始做。

- 编写Shell的样式表

我们用JavaScript字符串表示了layout的HTML代码，那么还需要把样式给设置上。`spa.shell.css`文件设置。其本质和layout中设置的CSS一模一样。


所有选择器的前缀都是 spa-shell。好处：

- 这些类由 Shell 模块spa.shell.js控制
- 防止命名间的冲突
- 易读

- 指示应用使用Shell

修改根名字空间模块spa.js，使用Shell，不只是在DOM显示 hello world。


```

		$container.html(
			'<h1 style="display:inline-block; margin:25px;">'
			+ 'Hello World!' 
			+ '</h1>'
		);

		// 替换为
		
		spa.shell.initModule($container);

```

浏览文档 `spa.html` ，看到的效果和布局设计的layout.html一样的。

下面让Shell来管理功能容器的工作

### 管理功能容器

Shell 渲染并管理功能模块。这些布局容器包含功能内容。

Shell 初始化并协调着应用中所有的功能模块。

Shell 指示功能模块来创建和管理所有功能容器中的内容。第四章要讲功能模块。

在本节，先编写展开和收起聊天滑块功能容器的方法。

然后创建点击事件处理程序，因此可以由用户来打开和关闭滑块。

检查作品，讨论下一个功能：使用URL哈希片段 hash fragment 来管理页面的状态。

- 编写展开和收起聊天滑块的方法

对聊天滑块函数的要求是适度的，我们不要求它具有很多的效果，不用过度设计，但需要它的性能很好。

需要完成的需求：

- 开发人员可以配置滑块运动的速度和高度
- 创建单个方法实现展开和收起
- 避免 race condition 冲突状态
- 开发人员能传入一个可选的回调函数，在滑块运动结束时调用。
- 创建测试代码，确保滑块功能正常

为了满足需求，需要修改 Shell





