App.Views.MainMenu = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#main_menu'
})
App.Views.LayoutView = Marionette.LayoutView.extend({
	tagName: 'div',
	id: 'main',
	template: '#layout_view_template',
	regions: {
		'mainMenu': '#menu',
		'mainView': '#view'
	},

	initialize: function() {
		this.initRouter();
	},

	initRouter: function() {
		
		var capturedThis = this;

		var Router = Marionette.AppRouter.extend({});

		var appRouter = new Router({
			appRoutes: {
				'' : 'home',
				'services' : 'services',
				'contact' : 'contact'
			}, 
			controller: App.Routes.routerController
		});


	},

	onRender: function() {
		if(!Backbone.History.started) Backbone.history.start();
		layoutView.mainMenu.show(new App.Views.MainMenu())	
	}

});

