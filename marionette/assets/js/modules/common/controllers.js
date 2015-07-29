App.Routes.routerController = {
	home: function() {
		var homeView = new App.Views.HomeView(); 
		layoutView.mainView.show(homeView);
	},
	services: function() {
		var servicesView = new App.Views.servicesView(); 
		layoutView.mainView.show(servicesView);

		var serviceCollection = new App.Models.serviceItemCollection([{ name: 'moe', description: 44},{ name: 'larry', description: 45},{ name: 'curly', description: 46}]);
		var serviceCollectionView = new App.Views.servicesCollectionView({collection: serviceCollection});
		servicesView.table.show(serviceCollectionView);
	},
	contact: function() {
		var contactView = new App.Views.ContactView(); 
		layoutView.mainView.show(contactView);
	},
	user: function(id) {
		var userView = new App.Views.UserView(); 
		layoutView.mainView.show(userView);

		userViewText = new App.Views.userText({
			userId: id
		});
		userView.table.show(userViewText);
	}
};
App.fn = {
}