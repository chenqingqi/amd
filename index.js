/**
 * 配置类库
 */
requirejs.config({
	
	
	//路径
	baseUrl:'./',
	
	//依赖
	shim: 
	{
		'jquery.ui'        : ['jquery'],
		'jquery.form'      : ['jquery'],
		'jquery.validate'  : ['jquery'],
		'jquery.selectlist': ['jquery'],
		'bootstrap'        : ['jquery']
    },
    
    //类库
	paths : 
	{
		'jquery'           : 'libs/jquery',
		'jquery.ui'        : 'libs/jquery.plugin/jquery.ui',
		'jquery.form'      : 'libs/jquery.plugin/jquery.form',
		'jquery.validate'  : 'libs/jquery.plugin/jquery.validate',
		'jquery.selectlist': 'libs/jquery.plugin/jquery.selectlist',
		'bootstrap'        : 'libs/bootstrap/bootbox.min'
	}
})


/**
 * 入口文件
 */
require(['module/footer','module/heard'],function(footer,heard)
{
	console.log(footer.getHeight());
	console.log(heard.getWidth());
})
