/*

This class only tells the routes what methods to call.

*/

module bs.routers {

	export class ProjectRouter extends Marionette.AppRouter{

		constructor(options) {
			
			options.appRoutes = {
				"":"analysisPage",
		        "about/": "aboutPage",
		        "analysis/": "analysisPage",
		        "analysis/:page(/)": "analysisPage"
			}
			
			super(options);
		}
	}
}