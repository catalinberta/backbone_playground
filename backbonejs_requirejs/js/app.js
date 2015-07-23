requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery/dist/jquery.min',
		underscore: 'libs/underscore-amd/underscore-min',
		backbone: 'libs/backbone-amd/backbone'
	}
});

require(['modules/common/main'],function() {});
require(['modules/common/models'],function() {});
require(['modules/common/views'],function() {});