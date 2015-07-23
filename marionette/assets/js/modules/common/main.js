

var Controller = Marionette.Controller.extend({
	index: function() {
		console.log(2)
	}
})

var controller = new Controller()

var Router = Backbone.Marionette.AppRouter.extend({
	controller: controller,

	routes: {
		"test" : "index"
	},

	appRoutes: {
		"test" : "index"
	},
	

	index: function() {
		console.log(1)
	}
})

var router = new Router();