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
		        + '<div class="spa-shell-modal"></div>',

		        chat_extend_time: 1000,
		        chat_retract_time: 300,
		        chat_extend_height: 450,
		        chat_retract_height: 15
		},
		// 将整个模块中共享的动态信息放在 stateMap 变量中
		stateMap = {$container : null},
		// 将 jQuery 集合缓存在 jqueryMap 中
		jqueryMap = {},
		// 此部分声明所有模块作用域内的变量
		setJqueryMap, toggleChat, initModule;

		// ---------- BEGIN 通用方法 ---------
		// ---------- END 通用方法 ----------

		// ---------- BEGIN DOM方法 ---------
		// 将创建和操作页面元素的函数放在 DOM方法 区块中

		// 使用setJqueryMap来缓存jQuery集合，可以减少jQuery对文档的遍历次数，提高性能
		setJqueryMap = function (){
			var $container = stateMap.$container;
			jqueryMap = {
				$container : $container
				$chat : $container.find('.spa-shell-chat')
			};
		};

		toggleChat = function(do_extend,callback){
			var 
				px_chat_ht = jqueryMap.$chat.height(),
				is_open = px_chat_ht === configMap.chat_extend_height;
				is_closed = px_chat_ht === configMap.chat_retract_height;
				is_sliding = ! is_open && ! is_closed;

			// 避免冲突
			is(is_sliding){return false;}

			// 展开聊天滑块
			if(do_extend){
				jqueryMap.$chat.animate(
					{height : configMap.chat_extend_height},
					configMap.chat_extend_time,
					function(){
						if(callback){callback(jqueryMap.$chat);}
					}
				);

			return true;
			}

			// 收起聊天滑块
			jqueryMap.$chat.animate(
				{height : configMap.chat_retract_height},
				configMap.chat_retract_time,
				function(){
					if(callback){callback(jqueryMap.$chat);}
				}
			);
			return true;
		};
		// ---------- END DOM方法 ----------


		// ---------- BEGIN 事件处理程序 ---------
		// ---------- END 事件处理程序 ----------

		// ---------- BEGIN 公共方法 ---------
		
		// 创建initModule 公开方法，用于初始化模块
		initModule = function($container){
			// 加载HTML和map jquery集合
			stateMap.$container = $container;
			$container.html(configMap.main_html);
			setJqueryMap();

			// 测试 toggle
			setTimeout(function(){toggleChat(true);},3000);
			setTimeout(function(){toggleChat(false);},8000);
		};

		// 显式地导出公开方法，以映射map的形式返回
		return {initModule : initModule};
		// ---------- END 通用方法 ----------
}());