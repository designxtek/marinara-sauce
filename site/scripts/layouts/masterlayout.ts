/*

Master layout is only responsible for header and footer.
The main section is for another view to handle.

*/

/// <reference path="../views/headerview.ts" />
/// <reference path="../views/footerview.ts" />

module bs.layouts {

	export var masterLayout;

	export class MasterLayout extends Marionette.Layout {

		regions: any;

		constructor(options: any) {
			options.template = '#master-template';

			var regionManager = new Marionette.RegionManager();
			this.regions = regionManager.addRegions({
	        	header: "#header",
	        	main: "#main",
	        	footer: "#footer"
	        });

			
	        this.on("show", function(view){
	        	console.log('master layout rendered');
	        	this.showMasterLayout();
	        });

			super(options);
		}

		showMasterLayout() {
			var headerView = new bs.views.HeaderView({});
        	this.regions.header.show(headerView);

        	var footerView = new bs.views.FooterView({});
        	this.regions.footer.show(footerView);
		}
	}
}