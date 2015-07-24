App.Views.LayoutView = Marionette.LayoutView.extend({
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

		var capturedThis = this;

		var Router = Marionette.AppRouter.extend({});

		var appRouter = new Router({
			appRoutes: {
				'' : 'home',
				'about' : 'about',
				'contact' : 'contact'
			}, 
			controller: App.Routes.routerController
		});


	},

	onRender: function() {
		if(!Backbone.History.started) Backbone.history.start();
		
	},

});

App.Views.AboutView = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#about_view'
});

App.Views.ContactView = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#contact_view'
});