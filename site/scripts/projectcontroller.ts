/*

This is a js object with a list of function for the router to call. 

*/

/// <reference path="myapp.ts" />
/// <reference path="layouts/projectlayout.ts" />
/// <reference path="layouts/masterlayout.ts" />

/// <reference path="layouts/aboutlayout.ts" />
/// <reference path="layouts/analysislayout.ts" />

module bs.project {

	export var projectController = {

		aboutPage: function() {
			var projectView = bs.layouts.masterLayout.regions.main.currentView;
			projectView.showAbout();
		},

		analysisPage: function() {
			var projectView = bs.layouts.masterLayout.regions.main.currentView;
			projectView.showAnalysis();
		},

		start: function() {

			// grab container id and render the master layout on it
	        var regionManager = new Marionette.RegionManager();
	        var regions = regionManager.addRegions({
	        	container: "#container"
	        });

	        bs.layouts.masterLayout = new bs.layouts.MasterLayout({});
			regions.container.show(bs.layouts.masterLayout);

			// render the projects section inside the master layout's main section
			var projectLayout = new bs.layouts.ProjectLayout({});
			bs.layouts.masterLayout.regions.main.show(projectLayout);
		}
	}
}