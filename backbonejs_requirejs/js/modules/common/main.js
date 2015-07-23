define(['backbone'],function(Backbone) {
	var APP = APP || {};
	APP.Router = Backbone.Router.extend({

		initialize: function() {
			Backbone.history.start();
		},
		
		routes: {
			"" : "index",
			"about" : "about",
			"search/:string" : "search"
		},

		index: function() {
			console.log('HOME page')
			require(['modules/home/main'],function() {}	)
		},

		about: function() {
			console.log('ABOUT page')
		},

		search: function(string) {
			console.log('SEARCHED: ' + string)
		} 

	});
	var router = new APP.Router();
});
