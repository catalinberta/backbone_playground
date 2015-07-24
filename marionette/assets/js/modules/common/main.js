var App = new Backbone.Marionette.Application();

App.addRegions({
  mainRegion: "#layout_view"
});

var RouterController = Marionette.Controller.extend({
	index: function() {
		layoutView.mainView.show(miniView)
		console.log('mini view')
	}
});

var routeController = new RouterController()

var Router = Marionette.AppRouter.extend({
	controller: routeController,

	appRoutes: {
		"test" : "index"
	},
});

var router = new Router();


LayoutView = Marionette.LayoutView.extend({
	tagName: 'div',
	id: 'main',
	template: '#layout_view_template',
	regions: {
		'mainView': '#view'
	},

	initialize: function() {
		this.initRouter();
		
	},

	initRouter: function() {
		var Router = Marionette.AppRouter.extend({
			AppRouter: {
				test: 'test'
			},
			controller: 'routeController'
		})
	},

	onRender: function() {
		if(!Backbone.History.started) Backbone.history.start();
	}
});

var layoutView = new LayoutView(); 

App.mainRegion.show(layoutView);

MiniView = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#mini_view'
});

var miniView = new MiniView(); 
