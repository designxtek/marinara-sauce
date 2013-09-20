/// <reference path="lib/jquery/jquery.d.ts" />
/// <reference path="lib/underscore/underscore.d.ts" />
/// <reference path="lib/backbone/backbone.d.ts" />
/// <reference path="lib/underscore/underscore.d.ts" />
/// <reference path="lib/marionette/marionette.d.ts" />

/// <reference path="routers/projectrouter.ts" />
/// <reference path="projectcontroller.ts" />

module bs {

	export var myApp: Marionette.Application;

	export class MyApp extends Marionette.Application {

		constructor() {
			console.log('initialize');

			super();
		}
	}
}

bs.myApp = new bs.MyApp();

bs.myApp.addInitializer(function(){

	// Create a new router using a controller
	var appRouter = new bs.routers.ProjectRouter({controller: bs.project.projectController});
	bs.project.projectController.start();

	Backbone.history.start();
});

bs.myApp.start();