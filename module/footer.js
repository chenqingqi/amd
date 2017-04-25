/**
 * 页脚模块
 */
define(['jquery'],function($)
{
	
	function getHeight()
	{
		return $('body').height();
	}
	
	return{
		
		getHeight:getHeight
	}
})