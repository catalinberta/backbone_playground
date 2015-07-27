App.Views.servicesView = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#services_view',
	regions: {
		table: '#table'
	}
});

App.Views.serviceItem = Marionette.ItemView.extend({
	tagName: 'tr',
	template: '#service_item_template'	
});

App.Views.servicesCollectionView = Marionette.CollectionView.extend({
	tagName: 'table',
	className: 'table',
	childView: App.Views.serviceItem
});


