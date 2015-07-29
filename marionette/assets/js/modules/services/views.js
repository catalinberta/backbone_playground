App.Views.servicesView = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#services_view',
	regions: {
		table: '#table'
	}
});

App.Views.serviceItem = Marionette.ItemView.extend({
	tagName: 'tr',
	template: '#service_item_template',
	onRender: function(a) {
		this.$el.find('a').attr('href','#user/1');
	}
});

App.Views.servicesCollectionView = Marionette.CollectionView.extend({
	tagName: 'table',
	className: 'table',
	childView: App.Views.serviceItem
});


