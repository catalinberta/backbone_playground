App.Views.UserView = Marionette.LayoutView.extend({
	tagName: 'div',
	template: '#user_view',
	regions: {
		table: '#user_info'
	}
});

App.Views.userText = Marionette.ItemView.extend({
	tagName: 'span',
	initialize: function() {
		this.userId = this.options.userId;
		_.bindAll(this, 'render');
	},

	template: _.template('You\'re viewing user ID: ' + this.userId),
})