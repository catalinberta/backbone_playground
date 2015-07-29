App.Views.MainMenu = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#main_menu',
	events: {
		"click ul li a": "updateMenuState"
	},
	updateMenuState: function(el) {
		var thisEl = $(el.currentTarget);
		$('#menu ul li').removeClass();
		thisEl.parent().addClass('active');
	}
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
				'contact' : 'contact',
				'user/:id' : 'user'
			}, 
			controller: App.Routes.routerController
		});


	},

	onRender: function() {
		if(!Backbone.History.started) Backbone.history.start();
		layoutView.mainMenu.show(new App.Views.MainMenu())	
	}

});

