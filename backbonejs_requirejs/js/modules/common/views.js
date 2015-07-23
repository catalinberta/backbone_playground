define(['backbone'],function(Backbone) {
	var APP = APP || {};
	APP.mainMenu = Backbone.View.extend({
		tagName: 'ul',

		template: _.template($('#mainMenuTpl').html()),

		initialize: function() {
			this.render();
		},

		render: function () {
			this.$el.html(this.template());
			$('#header').prepend(this.$el)
			return this;
		}
	});
	var mainMenu = new APP.mainMenu({});
});

