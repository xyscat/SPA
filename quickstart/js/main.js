// 将代码封装在spa命名空间内
var spa = (function ( $ ) {
	// 模块变量
	var 
		// 配置常量，把模块配置值保存
		configMap = {
			extended_height: 434,
			extended_title: '点击缩回',
			retracted_height: 16,
			retracted_title: '点击展开',
			template_html: '<div class="spa-silder"><\/div>'
		},
		// 声明所有其他的模块变量
		$chatSlider,
		toggleSlider, onClickSlider, initModule;

		// DOM 方法 toggleSlider
		// 交替滑块的高度
		toggleSlider = function(){
			var 
				slider_height = $chatSlider.height();

			// 如果滑块是收缩的就展开它
			if(slider_height === configMap.retracted_height){
				$chatSlider
					.animate({height: configMap.extended_height})
					.attr('title', configMap.extended_title);
				return true;
			}
			// 否则
			else if(slider_height === configMap.extended_height){
				$chatSlider
					.animate({height: configMap.retracted_height})
					.attr('title', configMap.retracted_title);
				return true;
			}
			// 如果在动画中，不采取行动
			return false;
		};

		// 事件处理程序 onClickSlider
		// 接收点击事件并调用 toggleSlider
		onClickSlider = function(event){
			toggleSlider();
			return false;
		};

		// 公共方法 初始化模块
		// 设置初始化声明并提供特性
		initModule = function($container){
			// 渲染HTML
			$container.html(configMap.template_html);

			$chatSlider = $container.find('.spa-slider');
			// 初始化滑块的高度和标题
			// 绑定用户点击事件到事件处理程序
			$chatSlider
				.attr('title', configMap.retracted_title)
				.click(onClickSlider);
			return true;
		};
		return {initModule: initModule};
}(jQuery));
// 当DOM加载完成后启动 spa
jQuery(document).ready(function(){
	spa.initModule(jQuery('#spa'));
});
