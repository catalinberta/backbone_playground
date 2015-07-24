App.Routes.routerController = {
	home: function() {
		var homeView = new App.Views.HomeView(); 
		layoutView.mainView.show(homeView);
	},
	about: function() {
		var aboutView = new App.Views.AboutView(); 
		layoutView.mainView.show(aboutView);
	},
	contact: function() {
		var contactView = new App.Views.ContactView(); 
		layoutView.mainView.show(contactView);
	}
};