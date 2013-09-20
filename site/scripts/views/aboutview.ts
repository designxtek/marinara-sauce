/*

MasterLayout
	L- ProjectLayout (Layout)
		L- AboutLayout (Layout)
			L- AboutSubView (ItemView)

*/

module bs.views {

	export class AboutSubView extends Marionette.ItemView {

		constructor(options: any) {
			options.template = "#about-subview-template";

			super(options);
		}
	}
}