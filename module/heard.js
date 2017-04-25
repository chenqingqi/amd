/**
 * 页头模块
 */
define(['jquery'],function($)
{
	
	function getWidth()
	{
		return $('body').width();
	}
	
	return{
		
		getWidth:getWidth
	}
})