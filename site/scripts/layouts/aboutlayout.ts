/*

MasterLayout
	L- Project Layout
		L- About Layout

*/

/// <reference path="../views/aboutview.ts" />

module bs.layouts {

	export class AboutLayout extends Marionette.Layout {

		regions: any;

		constructor(options: any) {
			options.template = "#about-template";

			var regionManager = new Marionette.RegionManager();
			this.regions = regionManager.addRegions({
	        	aboutSubView: ".subview",
	        });

	        this.on("show", function(view){
	        	var aboutSubviewView = new bs.views.AboutSubView({});
	        	this.regions.aboutSubView.show(aboutSubviewView);
	        });

			super(options);
		}
	}
}