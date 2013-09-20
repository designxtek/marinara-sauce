/*

MasterLayout
	L- ProjectLayout (Layout)
		L- AnalysisLayout (Layout)

*/

module bs.layouts {

	export class AnalysisLayout extends Marionette.Layout {

		constructor(options: any) {
			options.template = "#analysis-template";

			super(options);
		}
	}
}