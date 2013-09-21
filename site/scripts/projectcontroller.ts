/*

This is a js object with a list of function for the router to call. 

*/

/// <reference path="myapp.ts" />
/// <reference path="layouts/projectlayout.ts" />
/// <reference path="layouts/masterlayout.ts" />

/// <reference path="layouts/aboutlayout.ts" />
/// <reference path="layouts/analysislayout.ts" />

module bs.project {

	export class ProjectController {

		masterLayout: bs.layouts.MasterLayout;
		layout: bs.layouts.ProjectLayout;

		constructor() {
			
			// grab container id and render the master layout on it
	        var regionManager = new Marionette.RegionManager();
	        var regions = regionManager.addRegions({
	        	container: "#container"
	        });

	        this.masterLayout = new bs.layouts.MasterLayout({});
			regions.container.show(this.masterLayout);

			// render the projects section inside the master layout's main section
			this.layout = new bs.layouts.ProjectLayout({});
			this.masterLayout.regions.main.show(this.layout);

		}

		aboutPage() {
			var projectView = this.masterLayout.regions.main.currentView;
			projectView.showAbout();
		}

		analysisPage(page: any) {
			console.log('analysis page ' + page);
			var projectView = this.masterLayout.regions.main.currentView;
			projectView.showAnalysis();
		}
	}
}