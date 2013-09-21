/*

MasterLayout
	L- ProjectLayout (Layout)

*/

module bs.layouts {

	export class ProjectLayout extends Marionette.Layout {
		
		regions: any;

		constructor(options: any) {

			super(options);

			options.template = "#project-template";

			var regionManager = new Marionette.RegionManager();
			this.regions = regionManager.addRegions({
	        	projectContainer: "#project-container",
	        });

	        this.on("show", function(view){
	        	console.log('project layout rendered');
	        });
		}

		showAbout() {
			var item = new Backbone.Model();
			item.set("title", "about");

			var aboutLayout = new bs.layouts.AboutLayout({ model: item });
			this.regions.projectContainer.show(aboutLayout);

			console.log('about page rendered');
		}

		showAnalysis() {

			var item = new Backbone.Model();
			item.set("title", "analysis");

			var analysisLayout = new bs.layouts.AnalysisLayout({ model: item });
			this.regions.projectContainer.show(analysisLayout);

			console.log('analysis page rendered');
		}
	}
}